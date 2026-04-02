import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
    AnalyticsComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Akram Benaoun | Web Developer');
    this.metaService.addTags([
      { name: 'description', content: 'Akram Benaoun – Web developer showcasing projects, skills, services, and experience.' },
      { name: 'keywords', content: 'Web Developer, Portfolio, Angular, Frontend, Backend, Projects, Skills' },
      { name: 'author', content: 'Akram Benaoun' }
    ]);
  }
}
