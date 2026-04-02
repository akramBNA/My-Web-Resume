import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  techs = [
    {
      name: 'Angular',
      logo: 'https://cdn.simpleicons.org/angular/white'
    },
    {
      name: 'React / React Native',
      logo: 'https://cdn.simpleicons.org/react/white'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.simpleicons.org/nextdotjs/white'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.simpleicons.org/nodedotjs/white'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.simpleicons.org/postgresql/white'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.simpleicons.org/mongodb/white'
    }
  ];

}