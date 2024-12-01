
// Eschemas
export type PersonalInfo = {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    linkedin: string;
}

export type Education = {
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

export type Experience = {
    organization: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

export type Project = {
    name: string;
    position: string;
    link: string;
    description: string;
}

export type LeadershipActivity = {
    organization: string;
    location: string;
    role: string;
    startDate: string;
    endDate: string;
    achievements: string[];
}

export type TechnicalSkill = {
    category: string;
    skills: string[];
}

// data of user
export type UserData = {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    projects: Project[];
    leadershipAndActivities: LeadershipActivity[];
    technicalSkills: TechnicalSkill[];
}

// Props
export interface CVProps {
    userData: UserData;
} 