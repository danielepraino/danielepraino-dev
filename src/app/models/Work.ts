import { Tech } from "./Skill";

export interface Work {
    online: boolean;
    img?: string;
    title: string;
    infoBadge?: 'new' | 'updated' | 'coming soon';
    description?: string;
    techsBadge?: Tech[];
    linkGithub?: string;
    linkWebsite?: string;
}