// Template for generation Hardvard CV

import React from "react";

interface PersonalInfo {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    linkedin: string;
}

interface Education {
    name: string;
    location: string;
    degree: string;
    concentration: string;
    gpa?: string; // Opcional
    graduationDate: string;
    thesis?: string; // Opcional
    relevantEvents?: string,
    courseWorks?: string
}

interface Experience {
    organization: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Project {
    name: string;
    position: string;
    link: string;
    description: string;
}

interface LeadershipActivity {
    organization: string;
    location: string;
    role: string;
    startDate: string;
    endDate: string;
    achievements: string[];
}

interface TechnicalSkill {
    category: string;
    skills: string[];
}

interface User {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    projects: Project[];
    leadershipAndActivities: LeadershipActivity[];
    technicalSkills: TechnicalSkill[];
}

interface UserProps {
    user: User;
}


const HarvardTemplate: React.FC<UserProps> = ({ user }) => {
    return (
        <div style={{ width: "920px" }} className="container mx-auto p-5 bg-white text-black">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl">{`${user.personalInfo.name} ${user.personalInfo.lastName} `}</h1>
                <div>
                    {`${user.personalInfo.email} | ${user.personalInfo.phone} `}
                </div>
            </div>
            {user.education.length > 0 &&
                (
                    <div className="mt-4">
                        <p className="text-center ">Educación</p>
                        {user.education.map((edu, index) => (
                            <SchemeEducation key={index} education={edu} />
                        ))}
                    </div>
                )
            }
            {user.experience.length > 0 &&
                (
                    <div className="mt-4">
                        <p className="text-center ">Experiencia</p>
                        {user.experience.map((exp, index) => (
                            <SchemeExperience key={index} experience={exp} />
                        ))}
                    </div>
                )
            }
            {user.projects.length > 0 &&
                (
                    <div className="mt-4">
                        <p className="text-center ">Proyectos</p>
                        {user.projects.map((project, index) => (
                            <SchemeProjects key={index} project={project} />
                        ))}
                    </div>
                )
            }
            {user.leadershipAndActivities.length > 0 &&
                (
                    <div className="mt-4">
                        <p className="text-center ">Liderazgo y Actividades</p>
                        {user.leadershipAndActivities.map((leadership, index) => (
                            <SchemeLidership key={index} leadership={leadership} />
                        ))}
                    </div>
                )
            }
            {user.technicalSkills.length > 0 &&
                (
                    <div className="mt-4">
                        <p className="text-center">Habilidades Técnicas</p>
                        {user.technicalSkills.map((skill, index) => (
                            <SchemeSkills key={index} technicalSkills={skill} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default HarvardTemplate;


interface SchemeEducationProps {
    education: Education;
}

// Esquema de educación
const SchemeEducation: React.FC<SchemeEducationProps> = ({ education }) => {
    const {
        name,
        location,
        degree,
        concentration,
        gpa,
        graduationDate,
        thesis,
        relevantEvents,
        courseWorks
    } = education;

    return (
        <div className="my-3">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold">{name}</h3>
                <p>{location}</p>
            </div>
            <div className="flex justify-between">
                <p>
                    {`${degree}, ${concentration}`}
                    {gpa !== "undefined" && `, GPA: ${gpa}`}
                </p>
                <p>{graduationDate}</p>
            </div>
            <div>
                {thesis !== "undefined" && <p><span className="font-medium">Tesis: </span>{thesis}</p>}
                {courseWorks !== "undefined" && <p>Cursos relevantes: {courseWorks}</p>}
                {relevantEvents !== "undefined" && <p>{relevantEvents}</p>}
            </div>
        </div>
    );
}

interface SchemeExperienceProps {
    experience: Experience;
}

// Esquema de experiencia
const SchemeExperience: React.FC<SchemeExperienceProps> = ({ experience }) => {
    const {
        organization,
        location,
        position,
        startDate,
        endDate,
        description
    } = experience;

    return (
        <div className="my-3">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold">{organization}</h3>
                <p>{location}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-medium">{position}</p>
                <p>{startDate} - {endDate}</p>
            </div>
            <p>{description}</p>
        </div>
    );
}

interface SchemeProjectsProps {
    project: Project
}

// Esquema del proyecto
const SchemeProjects: React.FC<SchemeProjectsProps> = ({ project }) => {
    const {
        name,
        position,
        description
    } = project;

    return (
        <div className="my-3">
            <h3 className="text-lg font-bold">
                {name + ' '}
                <span className="font-normal">{position}</span>
            </h3>
            <p>{description}</p>
        </div>
    );
}

interface SchemeLidershipProps{
    leadership: LeadershipActivity
}

// Esquema de liderazgo y actividades
const SchemeLidership: React.FC<SchemeLidershipProps> = ({ leadership }) => {
    const {
        organization,
        location,
        role,
        startDate,
        endDate,
        achievements
    } = leadership;

    return (
        <div className="my-3">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold">{organization}</h3>
                <p>{location}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-medium">{role}</p>
                <p>{startDate} - {endDate}</p>
            </div>
            {achievements.map((data, index) => (
                <p key={index}>{data}</p>
            ))}
        </div>
    );
}

// Esquema de habilidades
interface SchemeSkillsProps{
    technicalSkills: TechnicalSkill
}

const SchemeSkills: React.FC<SchemeSkillsProps> = ({ technicalSkills }) => {
    const {
        category,
        skills
    } = technicalSkills;

    return (
        <div className="my-2">
            <p><strong>{category}: </strong>{skills.map((skill, index) => (
                skills.length >= 2 && skills.length === index + 1 ? <span key={index}>{skill}</span> : <span key={index}>{skill}, </span>
            ))}</p>
        </div>
    );
}