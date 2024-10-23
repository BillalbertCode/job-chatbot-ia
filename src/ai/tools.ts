import { tool as createTool } from "ai";
import { z } from "zod"

export const contextTool = createTool({
    description: "Mostrar automaticamente el contexto de la conversación cada que cambie el tema de conversación.",
    parameters: z.object({
        titleContext: z.string(),
        descriptionContext: z.string()
    }),
    execute: async function ({ titleContext, descriptionContext }) {
        console.log({ titleContext, descriptionContext })
        return { titleContext, descriptionContext }
    }
})

export const tools = {
    changeContextAutomatically: contextTool,
}