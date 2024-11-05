// Using for generation CV with user info
"use client"
import React, { useState } from "react"
// Components
import LayoutTool from "../LayoutTool"
// Helpers
import HarvardTemplatePDF from "./templates/HarvardTemplatePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Example from "./templates/Example";

const userI = {
    personalInfo: {
        name: "Billalbert",
        lastName: "Martinez",
        email: "billalbertcode@gmail.com",
        phone: "04142240292",
        linkedin: "https://www.linkedin.com/in/billalbertcode"
    },
    education: [
        {
            name: "Universidad de los Andes",
            location: "Mérida, Venezuela",
            degree: "Ingeniero en Sistemas",
            concentration: "Desarrollo de Software",
            gpa: "4.5/5",
            graduationDate: "Noviembre 2015",
            thesis: "Desarrollo de un sistema de gestión de proyectos",
            relevantEvents: "Participación en conferencias de tecnología",
            courseWorks: "Desarrollo de Software, Bases de Datos, Redes"
        },
        {
            name: "Universidad Nacional Experimental del Táchira",
            location: "San Cristóbal, Venezuela",
            degree: "Licenciatura en Informática",
            concentration: "Informática",
            graduationDate: "Mayo 2010"
        }
    ],
    experience: [
        {
            organization: "Tech Solutions",
            location: "Caracas, Venezuela",
            position: "Desarrollador de Software",
            startDate: "Enero 2016",
            endDate: "Diciembre 2018",
            description: "Desarrollé aplicaciones web utilizando tecnologías como React y Node.js, y colaboré en un equipo ágil para mejorar la eficiencia del desarrollo."
        },
        {
            organization: "Innovatech",
            location: "Valencia, Venezuela",
            position: "Ingeniero de Software Senior",
            startDate: "Enero 2019",
            endDate: "Presente",
            description: "Lidero un equipo de desarrollo en la creación de soluciones de software personalizadas para clientes, aplicando metodologías ágiles y mejores prácticas de desarrollo."
        }
    ],
    projects: [
        {
            name: "Sistema de Gestión de Proyectos",
            position: "Desarrollador Principal",
            link: "https://github.com/billalbert/sistema-gestion-proyectos",
            description: "Desarrollé un sistema de gestión de proyectos que permite a los usuarios planificar, ejecutar y monitorear proyectos de manera eficiente."
        },
        {
            name: "Aplicación Móvil de Compras",
            position: "Desarrollador Full Stack",
            link: "https://github.com/billalbert/aplicacion-compras",
            description: "Colaboré en el desarrollo de una aplicación móvil que permite a los usuarios realizar compras en línea de manera fácil y rápida."
        }
    ],
    leadershipAndActivities: [
        {
            organization: "Club de Programación de la Universidad",
            location: "Mérida, Venezuela",
            role: "Presidente",
            startDate: "Enero 2014",
            endDate: "Diciembre 2015",
            achievements: [
                "Organización de talleres de programación para estudiantes.",
                "Fomento de la participación en competencias de programación."
            ]
        },
        {
            organization: "Voluntariado en Tecnología",
            location: "Caracas, Venezuela",
            role: "Coordinador de Proyectos",
            startDate: "Enero 2018",
            endDate: "Diciembre 2019",
            achievements: [
                "Lideré un equipo de voluntarios para enseñar programación a jóvenes en comunidades desfavorecidas.",
                "Desarrollé un programa de capacitación en habilidades digitales."
            ]
        }
    ],
    technicalSkills: [
        {
            category: "Desarrollo Web",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
        },
        {
            category: "Base de Datos",
            skills: ["MySQL", "MongoDB", "PostgreSQL"]
        },
        {
            category: "Metodologías Ágiles",
            skills: ["Scrum", "Kanban"]
        }
    ]
};

const GenerateCVTool = (user: Object) => {
    //  Templates options
    const templates: { [key: string]: JSX.Element } = {
        HarvardPDF: <HarvardTemplatePDF />,
        Example: <Example />
    }

    // capture select template
    const [selectTemplate, setSelectTemplate] = useState<string>(Object.keys(templates)[0])

    const handleSelectTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectTemplate(event.target.value);
    };

    return (
        <LayoutTool toolName="Generate CV">
            <div>
                {Object.keys(templates).map(template => (
                    <div key={template}>
                        <input
                            type="radio"
                            name="template"
                            value={template}
                            checked={selectTemplate === template}
                            onChange={handleSelectTemplate}
                        />
                        <label>{template}</label>
                    </div>
                ))}
            </div>
            <PDFDownloadLink
                document={templates[selectTemplate]}
                fileName={selectTemplate}
            >
                Descargar
            </PDFDownloadLink>
        </LayoutTool>
    )
}

export default GenerateCVTool