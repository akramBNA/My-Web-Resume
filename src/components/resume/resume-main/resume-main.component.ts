import { Component } from '@angular/core';
import { ContactDetailsComponent } from "../contact-details/contact-details.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { LanguagesComponent } from "../languages/languages.component";
import { CertificatesComponent } from "../certificates/certificates.component";

@Component({
  selector: 'app-resume-main',
  standalone: true,
  imports: [ContactDetailsComponent, ExperienceComponent, EducationComponent, LanguagesComponent, CertificatesComponent],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css'
})
export class ResumeMainComponent {

}
