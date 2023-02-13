import { Component, Input } from '@angular/core';
import { IconDefinition, faCode } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  
  @Input() title:string = '';
  @Input() icon:IconDefinition = faCode;
  @Input() skills:Skill['techs'] = [];
}
