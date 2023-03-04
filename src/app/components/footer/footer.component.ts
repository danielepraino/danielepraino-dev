import { Component } from '@angular/core';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faSquareGithub = faSquareGithub;
  faLinkedin = faLinkedin;
}
