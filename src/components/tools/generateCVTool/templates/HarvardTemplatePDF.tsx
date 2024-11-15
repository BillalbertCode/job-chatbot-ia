"use client"
// Template of resume vitae
//  Using object on data user and react-pdef/renderer
// 
import { Document, Page, Text, View, StyleSheet, ViewProps } from "@react-pdf/renderer";
import React, { ReactNode } from "react";

// Types for user
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

// main component for render or download cv in pdf
const HarvardTemplatePDF: React.FC<UserProps> = ({ user }) => {
    return (
        <Document>
            <Page style={styles.body} size={"A4"}>
                <View style={styles.header}>
                    <Text style={styles.title}>{user.personalInfo.name} {user.personalInfo.lastName}</Text>
                    <Text style={styles.text}>{user.personalInfo.email} | {user.personalInfo.phone}</Text>
                </View>
                {user.education.length > 0 &&
                    (
                        <LayoutSection titleSection="Educación">
                            {user.education.map((edu, index) => (
                                <SectionEducation key={index} education={edu} />
                            ))}
                        </LayoutSection>
                    )
                }
                {user.experience.length > 0 &&
                    (
                        <LayoutSection titleSection="Experiencia">
                            {user.experience.map((exp, index) => (
                                <SectionExperience key={index} experience={exp} />
                            ))}
                        </LayoutSection>
                    )}
                {user.projects.length > 0 &&
                    (
                        <LayoutSection titleSection="Proyectos">
                            {user.projects.map((project, index) => (
                                <SectionProjects key={index} project={project} />
                            ))}
                        </LayoutSection>
                    )}
                {user.leadershipAndActivities.length > 0 &&
                    (
                        <LayoutSection titleSection="Liderazgo y Actividades">
                            {user.leadershipAndActivities.map((leader, index) => (
                                <SectionLeadership key={index} leadership={leader} />
                            ))}
                        </LayoutSection>
                    )}
                {user.technicalSkills.length > 0 &&
                    (
                        <LayoutSection titleSection="Habilidades Técnicas">
                            {user.technicalSkills.map((skill, index) => (
                                <SectionSkills key={index} technicalSkills={skill} />
                            ))}
                        </LayoutSection>
                    )}
            </Page>
        </Document>
    )
}

export default HarvardTemplatePDF

// Styles for template on react pdf

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    subtitle: {
        maxWidth: "65%",
        fontSize: 14,
        fontWeight: 700,
    },
    text: {
        fontSize: 12,
    },
    textMediumBold: {
        fontSize: 12,
        fontWeight: 500,
    },
    textBold: {
        fontSize: 12,
        fontWeight: 700,
    },
    section: {
        marginVertical: 5,
    },
    titleSection: {
        fontSize: 14,
        textAlign: "center"
    },
    sectionChildren: {
        marginVertical: 5
    },
    justifyBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }

});

// layout of sections
interface LayoutSectionProps extends ViewProps {
    titleSection: string;
    children: ReactNode
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ titleSection, children, ...props }) => {
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

const SectionEducation: React.FC<SectionEducationProps> = ({ education }) => {
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

const SectionExperience: React.FC<SectionExperienceProps> = ({ experience }) => {
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

const SectionProjects: React.FC<SectionProjectsProps> = ({ project }) => {
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

const SectionLeadership: React.FC<SectionLeadershipProps> = ({ leadership }) => {
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

const SectionSkills: React.FC<SectionSkillsProps> = ({ technicalSkills }) => {
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






