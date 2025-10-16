import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { LanguagesComponent } from '../languages/languages.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { AnalyticsComponent } from '../analytics/analytics.component';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ContactMeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    LanguagesComponent,
    CertificatesComponent,
    ContactDetailsComponent,
    ChatbotComponent,
    ScrollToTopComponent,
    AnalyticsComponent
  ],  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {

}
