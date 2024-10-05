import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export async function POST(req: Request) {

    const { messages } = await req.json()

    const result = await streamText({
        model: google("gemini-1.5-pro-latest"),
        prompt: messages,
        system: "You are an assistant specialized in career counseling and more. Your answers should be simple unless you are asked to explain them."
    })

    for await (const textPart of result.textStream) {
        console.log(textPart);
    }
    return result.toDataStreamResponse()
}   