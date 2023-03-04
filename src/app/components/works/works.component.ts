import { Component } from '@angular/core';
import { Work } from 'src/app/models/Work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  works:Work[] = [
    {
      online: true,
      img: '/assets/img/works-mockup/shitcoin_radar_mockup.jpg',
      title: 'Shitcoin Radar',
      infoBadge: 'new',
      description: 'Shitcoin Radar is a useful application to detect whether a crypto is a shitcoin or not. The "scan" is done by cross-checking the normal score, developer score, ranking, etc. data from the Coingecko API V3.',
      techsBadge: [
        {
          img: '/assets/img/typescript.png',
          name: 'TypeScript'
        },
        {
          img: '/assets/img/angularjs.png',
          name: 'Angular'
        },
        {
          img: '/assets/img/tailwind.png',
          name: 'TailwindCSS'
        },
        {
          img: '/assets/img/lottiefiles.svg',
          name: 'LottieFiles'
        }
      ],
      linkGithub: 'https://github.com/danielepraino/shitcoin-radar',
      linkWebsite: 'https://shitcoinradar.netlify.app/'
    },
    {
      online: false,
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Not Not Game',
      infoBadge: 'coming soon',
      description: 'Not Not Angular is a revised version of the game Not Not - A Brain-Buster available for mobile and consoles.',
    },
    {
      online: false,
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Affirma',
      description: 'Affirma is a useful app for mental well-being. Each day you can write a gratitude journal and todo list for your mental well-being.',
    },
  ]
}
