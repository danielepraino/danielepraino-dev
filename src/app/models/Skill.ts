import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Skill {
  title: string;
  icon: IconDefinition;
  techs: Tech[];
}
  
export interface Tech {
  img: string;
  name: string;
}
  