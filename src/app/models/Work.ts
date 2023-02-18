import { Tech } from "./Skill";

export interface Work {
    online: boolean;
    img?: string;
    title: string;
    infoBadge: InfoBadge;
    description?: string;
    techsBadge?: Tech[];
    linkGithub?: string;
    linkWebsite?: string;
}

export interface InfoBadge {
    show: boolean;
    text?: string;
}