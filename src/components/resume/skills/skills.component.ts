import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { name: 'MERN/MEAN Stack', logo: 'https://cdn.simpleicons.org/node.js/white' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/white' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/white' },
    { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/white' },
    { name: 'CSS', logo: 'https://cdn.simpleicons.org/css3/white' },
    { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap/white' },
    { name: 'Angular Material', logo: 'https://cdn.simpleicons.org/angular/white' },
    { name: 'TailwindCSS', logo: 'https://cdn.simpleicons.org/tailwindcss/white' },
    { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/white' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/white' },
    { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/white' },
    { name: 'NextJS', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
    { name: 'NodeJS', logo: 'https://cdn.simpleicons.org/node.js/white' },
    { name: 'ExpressJS', logo: 'https://cdn.simpleicons.org/express/white' },
    { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/swagger/white' },
    { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/white' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/white' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/white' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/white' },
    { name: 'Agile (Scrum)', logo: 'https://cdn.simpleicons.org/jira/white' },
    { name: 'Cypress', logo: 'https://cdn.simpleicons.org/cypress/white' },
    { name: 'Playwright', logo: 'https://cdn.simpleicons.org/playwright/white' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/white' },
    { name: 'EmailJS', logo: 'https://cdn.simpleicons.org/mailjet/white' },
    { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/white' },
    { name: 'RabbitMQ', logo: 'https://cdn.simpleicons.org/rabbitmq/white' },
    { name: 'Socket.IO', logo: 'https://cdn.simpleicons.org/socketdotio/white' },
    { name: 'Java / Spring Boot', logo: 'https://cdn.simpleicons.org/java/white' }
  ];
}