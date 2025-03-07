import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
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
// import { projectsComponent } from '../components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-web-resume';
  showScrollToTop = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.showScrollToTop = scrollPosition > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
