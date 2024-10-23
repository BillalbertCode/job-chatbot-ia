import { google } from "@ai-sdk/google"
import { convertToCoreMessages, streamText } from "ai"
import { tools } from "@/ai/tools"

export async function POST(req: Request) {

    const { messages } = await req.json()

    const result = await streamText({
        model: google("gemini-1.5-pro-latest"),
        messages: convertToCoreMessages(messages),
        system: "Eres un asistente especializado en asesoramiento profesional y solo responderás preguntas relacionadas con el trabajo. Tus respuestas deben ser simples a menos que te pidan que las expliques.",
        tools,
    })

    return result.toDataStreamResponse()
}