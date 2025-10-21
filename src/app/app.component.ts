import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { NavbarComponent } from '../components/Currecilum-page/navbar/navbar.component';
import { FooterComponent } from '../components/Currecilum-page/footer/footer.component';
import { ContactMeComponent } from '../components/Currecilum-page/contact-me/contact-me.component';
import { AboutComponent } from '../components/Currecilum-page/about/about.component';
import { SkillsComponent } from '../components/Currecilum-page/skills/skills.component';
import { EducationComponent } from '../components/Currecilum-page/education/education.component';
import { ExperienceComponent } from '../components/Currecilum-page/experience/experience.component';
import { LanguagesComponent } from '../components/Currecilum-page/languages/languages.component';
import { ContactDetailsComponent } from '../components/Currecilum-page/contact-details/contact-details.component';
import { CertificatesComponent } from '../components/Currecilum-page/certificates/certificates.component';
import { ChatbotComponent } from '../components/Currecilum-page/chatbot/chatbot.component';
import { ScrollToTopComponent } from '../components/Currecilum-page/scroll-to-top/scroll-to-top.component';
import { AnalyticsComponent } from '../components/Currecilum-page/analytics/analytics.component';
import { ResumePageComponent } from '../components/Currecilum-page/resume-page/resume-page.component';

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
    AnalyticsComponent,
    ResumePageComponent
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
