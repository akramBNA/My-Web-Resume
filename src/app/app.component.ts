import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { LanguagesComponent } from '../components/languages/languages.component';
import { ContactDetailsComponent } from '../components/contact-details/contact-details.component';
import { CertificatesComponent } from '../components/certificates/certificates.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component';

@Component({
  selector: 'app-root',
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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Akram’s Portfolio | Web Developer');
    this.metaService.updateTag({ name: 'description', content: 'A showcase of Akram Benaoun’s projects and skills in web development.' });
  }
}
