import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { ChatbotComponent } from "../chatbot/chatbot.component";
import { ServicesComponent } from "../services/services.component";
import { ProjectsComponent } from "../projects/projects.component";
import { TechnologiesComponent } from "../technologies/technologies.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ContactMeComponent, ChatbotComponent, ServicesComponent, ProjectsComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
