import { Tech } from "./Skill";

export interface Work {
    img: string;
    title: string;
    infoBadge: InfoBadge;
    description: string;
    techsBadge: Tech[];
}

export interface InfoBadge {
    show: boolean;
    text?: string;
}