import { google } from "@ai-sdk/google"
import { convertToCoreMessages, streamText } from "ai"
import { z } from "zod"

export async function POST(req: Request) {

    const { messages } = await req.json()

    const result = await streamText({
        model: google("gemini-1.5-pro-latest"),
        messages: convertToCoreMessages(messages),
        tools: {
            changeContextAutomatically: {
                description: "Mostrar automaticamente el contexto de la conversación cada que cambie dicho contexto.",
                parameters: z.object({
                    titleContext: z.string(),
                    descriptionContext: z.string()
                }),
                execute: async function ({ titleContext, descriptionContext }) {
                    console.log({ titleContext, descriptionContext })
                    return { titleContext, descriptionContext }
                }
            },
        },
        system: "Eres un asistente especializado en asesoramiento profesional y solo responderás preguntas relacionadas con el trabajo. Tus respuestas deben ser simples a menos que te pidan que las expliques."
    })

    return result.toDataStreamResponse()
}