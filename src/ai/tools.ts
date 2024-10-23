// Tools for using in chatbot or other functions IA 
import { tool as createTool } from "ai";
import { z } from "zod"

export const contextTool = createTool({
    description: "Mostrar automaticamente el contexto de la conversación cada que cambie el tema de conversación.",
    parameters: z.object({
        titleContext: z.string(),
        descriptionContext: z.string()
    }),
    execute: async ({ titleContext, descriptionContext }) => ({
        titleContext,
        descriptionContext
    })
})

export const generateCVTool = createTool({
    description: "Generador de CV (Curriculum)",
    parameters: z.object({
        personDescription: z.string().max(300),
        education: z.array(z.object({
            name: z.string(),
            location: z.string(),
            degree: z.string(),
            concentration: z.string(),
            gpa: z.string(),
            graduationDate: z.string(),
            thesis: z.string(),
            relevantEvents: z.string(),
            courseWorks: z.string(),
            type: z.string()
        }).partial({
            gpa: true,
            thesis: true,
            courseWorks: true,
            relevantEvents: true
        })).max(3).describe('Los estudios más compatibles y relevantes con la descripcion del empleo'),
        experience: z.array(z.object({
            organization: z.string(),
            location: z.string(),
            position: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            description: z.string().max(350)
        })).max(3).describe('Las experiencias más compatibles y relevantes con la descripción del empleo'),
        projects: z.array(z.object({
            name: z.string(),
            position: z.string(),
            description: z.string().max(350)
        })).max(2).describe('Los proyectos más compatibles y relevantes con la descripción del empleo'),
        leadershipAndActivities: z.array(z.object({
            organization: z.string(),
            location: z.string(),
            role: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            achievements: z.array(z.string().max(350))
        })).max(2).describe('Las Actividades extracurriculares más compatibles y relevantes con la descripción del empleo'),
        technicalSkills: z.array(z.object({
            category: z.string().describe('Nombre de la categoria'),
            skills: z.array(z.string()).describe('Habilidades de la categoria')
        })).describe('Analiza la información del usuario para añadirle habilidades nuevas si compatibles con la descripción del empleo. Extraer las habilidades mas relevantes y dividelas en categorias'),
    }).describe('Extraer la información mas relevante del usuario y compatible con la descripción del empleo. Así como mejorar su lexico. Todo esto es para crear un curricullum apropiado a la descripción del empleo. '),
    execute: async ({ personDescription, education, experience, projects, leadershipAndActivities, technicalSkills }) => ({
        personDescription,
        education,
        experience,
        projects,
        leadershipAndActivities,
        technicalSkills
    })
})

export const generateCoverLetterTool = createTool({
    description: "Generador de carta de presentación",
    parameters: z.object({
        asunto: z.string().describe("Asunto de la carta de presentación"),
        content: z.string().describe("Descripción de la carta de presentación")
    }),
    execute: async ({ asunto, content }) => ({
        asunto,
        content
    })
})

export const tools = {
    changeContextAutomatically: contextTool,
    generateCurriculum: generateCVTool,
    generateCoverLetterTool: generateCoverLetterTool
}