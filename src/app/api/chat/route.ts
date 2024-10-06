import { google } from "@ai-sdk/google"
import { convertToCoreMessages, streamText } from "ai"

export async function POST(req: Request) {

    const { messages } = await req.json()

    const result = await streamText({
        model: google("gemini-1.5-pro-latest"),
        messages: convertToCoreMessages(messages),
        system: "You are an assistant specialized in professional advice and will only answer questions related to work. Your answers should be simple unless you are asked to explain them."
    })

    return result.toDataStreamResponse()
}   