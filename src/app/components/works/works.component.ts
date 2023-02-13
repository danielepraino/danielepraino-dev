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
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Test',
      infoBadge: {
        show: true,
        text: 'NEW'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dictum dui, vitae fermentum est. Integer sit amet nisl elementum, scelerisque erat vitae, tristique massa. Aenean in metus metus. Duis a dapibus sapien, eget ullamcorper justo. Donec vestibulum fermentum tempor.',
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
        }
      ]
    },
    {
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Test',
      infoBadge: {
        show: true,
        text: 'NEW'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dictum dui, vitae fermentum est.',
      techsBadge: [
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
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Test',
      infoBadge: {
        show: true,
        text: 'NEW'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dictum dui, vitae fermentum est. Integer sit amet nisl elementum, scelerisque erat vitae, tristique massa. Aenean in metus metus. Duis a dapibus sapien, eget ullamcorper justo. Donec vestibulum fermentum tempor.',
      techsBadge: [
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
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Test',
      infoBadge: {
        show: true,
        text: 'NEW'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dictum dui, vitae fermentum est. Integer sit amet nisl elementum, scelerisque erat vitae, tristique massa. Aenean in metus metus. Duis a dapibus sapien, eget ullamcorper justo. Donec vestibulum fermentum tempor.',
      techsBadge: [
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
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Test',
      infoBadge: {
        show: true,
        text: 'NEW'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dictum dui, vitae fermentum est.',
      techsBadge: [
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
      img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
      title: 'Test',
      infoBadge: {
        show: true,
        text: 'NEW'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dictum dui, vitae fermentum est. Integer sit amet nisl elementum, scelerisque erat vitae, tristique massa. Aenean in metus metus. Duis a dapibus sapien, eget ullamcorper justo. Donec vestibulum fermentum tempor.',
      techsBadge: [
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
  ]
}
