import { Component } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { faCode, faMugSaucer, faCodeCommit, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  
  skills:Skill[] = [
    {
      title: 'HTML - CSS',
      icon: faCode,
      techs: [
        {
          img: '/assets/img/html5.png',
          name: 'HTML5'
        },
        {
          img: '/assets/img/sass.png',
          name: 'SASS'
        },
        {
          img: '/assets/img/bootstrap.png',
          name: 'Bootstrap'
        },
        {
          img: '/assets/img/tailwind.png',
          name: 'TailwindCSS'
        }
      ]
    },
    {
      title: 'JavaScript',
      icon: faMugSaucer,
      techs: [
        {
          img: '/assets/img/typescript.png',
          name: 'TypeScript'
        },
        {
          img: '/assets/img/angularjs.png',
          name: 'Angular'
        }
      ]
    },
    {
      title: 'Versioning',
      icon: faCodeCommit,
      techs: [
        {
          img: '/assets/img/git.png',
          name: 'GIT'
        },
      ]
    },
    {
      title: 'IDE',
      icon: faLaptopCode,
      techs: [
        {
          img: '/assets/img/visual-studio-code.png',
          name: 'VS Code'
        },
      ]
    },

  ]

}
