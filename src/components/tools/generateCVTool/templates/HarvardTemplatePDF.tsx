// Template of resume vitae
//  Using object on data user and react-pdef/renderer
// 
import { Document, Page, Text, View, ViewProps } from "@react-pdf/renderer";
// Types
import { CVProps, Education, Experience, Project, LeadershipActivity, TechnicalSkill } from "@/components/tools/generateCVTool/CV.model";
import styles from "../CV.styles";
import React, { ReactNode } from "react";



// layout of sections
interface LayoutSectionProps extends ViewProps {
    titleSection: string;
    children: ReactNode
}

function LayoutSection({ titleSection, children, ...props }: LayoutSectionProps) {
    return (
        <View {...props} style={styles.section}>
            <Text style={styles.titleSection}>{titleSection}</Text>
            {children}
        </View>
    )
}

// section education
interface SectionEducationProps {
    education: Education;
}

function SectionEducation({ education }: SectionEducationProps) {
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
        <View style={styles.sectionChildren}>
            <View style={styles.justifyBetween}>
                <Text style={styles.subtitle}>{name}</Text>
                <Text style={styles.text}>{location}</Text>
            </View>
            <View style={styles.justifyBetween}>
                <Text style={styles.text}>
                    {`${degree}, ${concentration}`}
                    {gpa && `, GPA: ${gpa}`}
                </Text>
                <Text style={styles.text}>{graduationDate}</Text>
            </View>
            <View>
                {thesis && <Text style={styles.text}>Tesis: {thesis}</Text>}
                {courseWorks && <Text style={styles.text}>Cursos relevantes: {courseWorks}</Text>}
                {relevantEvents && <Text style={styles.text}>{relevantEvents}</Text>}
            </View>
        </View>
    )
}

// Seccion de experiencia
interface SectionExperienceProps {
    experience: Experience
}

function SectionExperience({ experience }: SectionExperienceProps) {
    const {
        organization,
        location,
        position,
        startDate,
        endDate,
        description
    } = experience;

    return (
        <View style={styles.sectionChildren}>
            <View style={styles.justifyBetween}>
                <Text style={styles.subtitle}>{organization}</Text>
                <Text style={styles.text}>{location}</Text>
            </View>
            <View style={styles.justifyBetween}>
                <Text style={styles.text}>{position}</Text>
                <Text style={styles.text}>{startDate} - {endDate}</Text>
            </View>
            <Text style={styles.text}>{description}</Text>
        </View>
    )
}

// Section Projects
interface SectionProjectsProps {
    project: Project
}

function SectionProjects({ project }: SectionProjectsProps) {
    const {
        name,
        position,
        description
    } = project;
    return (
        <View style={styles.sectionChildren}>
            <Text style={styles.subtitle}>
                {name + " "}
                <Text style={styles.text}>{position}</Text>
            </Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    )
}

// Section Leadership and Activities
interface SectionLeadershipProps {
    leadership: LeadershipActivity
}

function SectionLeadership({ leadership }: SectionLeadershipProps) {
    const {
        organization,
        location,
        role,
        startDate,
        endDate,
        achievements
    } = leadership;
    return (
        <View style={styles.sectionChildren}>
            <View style={styles.justifyBetween}>
                <Text style={styles.subtitle}>{organization}</Text>
                <Text style={styles.text}>{location}</Text>
            </View>
            <View style={styles.justifyBetween}>
                <Text style={styles.textMediumBold}>{role}</Text>
                <Text style={styles.text}>{startDate} - {endDate}</Text>
            </View>
            {achievements.map((data, index) => (
                <Text style={styles.text} key={index}>{data}</Text>
            ))}
        </View>
    )
}

// Section skills

interface SectionSkillsProps {
    technicalSkills: TechnicalSkill
}

function SectionSkills({ technicalSkills }: SectionSkillsProps) {
    const {
        category,
        skills,
    } = technicalSkills

    return (
        <View style={styles.sectionChildren}>
            <Text style={styles.text}>
                <Text style={styles.textBold}>{category}: </Text>
                {skills.map((skill, index) => (
                    skills.length >= 2 && skills.length === index + 1
                        ? <Text key={index}>{skill}</Text>
                        : <Text key={index}>{skill},</Text>
                ))}
            </Text>
        </View>
    )
}

// main component for render or download cv in pdf
export default function HarvardTemplatePDF({ userData }: CVProps) {
    if (!userData) {
        return <Text>No se encontraron datos para mostrar.</Text>;
    }
    return (
        <Document>
            <Page style={styles.body} size={"A4"}>
                <View style={styles.header}>
                    <Text style={styles.title}>{userData.personalInfo.name} {userData.personalInfo.lastName}</Text>
                    <Text style={styles.text}>{userData.personalInfo.email} | {userData.personalInfo.phone}</Text>
                </View>
                {userData.education.length > 0 &&
                    (
                        <LayoutSection titleSection="Educación">
                            {userData.education.map((edu, index) => (
                                <SectionEducation key={index} education={edu} />
                            ))}
                        </LayoutSection>
                    )
                }
                {userData.experience.length > 0 &&
                    (
                        <LayoutSection titleSection="Experiencia">
                            {userData.experience.map((exp, index) => (
                                <SectionExperience key={index} experience={exp} />
                            ))}
                        </LayoutSection>
                    )}
                {userData.projects.length > 0 &&
                    (
                        <LayoutSection titleSection="Proyectos">
                            {userData.projects.map((project, index) => (
                                <SectionProjects key={index} project={project} />
                            ))}
                        </LayoutSection>
                    )}
                {userData.leadershipAndActivities.length > 0 &&
                    (
                        <LayoutSection titleSection="Liderazgo y Actividades">
                            {userData.leadershipAndActivities.map((leader, index) => (
                                <SectionLeadership key={index} leadership={leader} />
                            ))}
                        </LayoutSection>
                    )}
                {userData.technicalSkills.length > 0 &&
                    (
                        <LayoutSection titleSection="Habilidades Técnicas">
                            {userData.technicalSkills.map((skill, index) => (
                                <SectionSkills key={index} technicalSkills={skill} />
                            ))}
                        </LayoutSection>
                    )}
            </Page>
        </Document>
    )
}