import { Component } from '@angular/core';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faSquareGithub = faSquareGithub;
  faLinkedin = faLinkedin;
}
