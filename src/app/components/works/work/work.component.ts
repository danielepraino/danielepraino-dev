import { Component, Input } from '@angular/core';
import { Work } from 'src/app/models/Work';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  faGithub = faGithub;
  faChevronRight = faChevronRight;
  
  @Input() work:Work | null = null;
}
