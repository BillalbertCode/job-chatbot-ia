import { google } from "@ai-sdk/google"
import { convertToCoreMessages, InvalidToolArgumentsError, NoSuchModelError, NoSuchToolError, streamText } from "ai"
import { tools } from "@/ai/tools"

export async function POST(req: Request) {

    const { messages } = await req.json()

    const result = await streamText({
        model: google("gemini-1.5-pro-latest"),
        messages: convertToCoreMessages(messages),
        system: "Eres un asistente especializado en asesoramiento profesional y solo responderás preguntas relacionadas con el trabajo. Tus respuestas deben ser simples a menos que te pidan que las expliques.",
        tools,
        maxSteps: 10,
    })

    return result.toDataStreamResponse({
        getErrorMessage: error => {
            if (NoSuchToolError.isInstance(error)) {
                return 'The model tried to call a unknown tool.';
            } else if (InvalidToolArgumentsError.isInstance(error)) {
                return 'The model called a tool with invalid arguments.';
            }
            return 'An unknown error occurred.';
            // else if (ToolExecutionError.isInstance(error)   ){
            //     return 'The model called a tool that failed to execute.';
            // } else {
            //     return error
            // }
        }
    })
}