import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ResumePageComponent } from '../components/curriculum-page/resume-page/resume-page.component';
import { AboutComponent } from '../components/main-page/about/about.component';
import { NavbarComponent } from "../components/main-page/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ResumePageComponent,
    AboutComponent,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Akram’s Website | Web Developer');
    this.metaService.updateTag({ name: 'description', content: 'A showcase of Akram Benaoun’s projects and skills in web development.' });
  }
}
