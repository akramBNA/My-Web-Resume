import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { LanguagesComponent } from "../languages/languages.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-resume-main',
  standalone: true,
  imports: [ExperienceComponent, EducationComponent, LanguagesComponent, CertificatesComponent, SkillsComponent],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css'
})
export class ResumeMainComponent {

}
