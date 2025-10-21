import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ResumePageComponent } from '../components/Currecilum-page/resume-page/resume-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ResumePageComponent
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
