import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AnalyticsService } from '../../services/analytics.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  private document = inject(DOCUMENT);

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.addGoogleAnalytics();
    this.analyticsService.trackVisits();
  }

  private addGoogleAnalytics() {
    const script1 = this.document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.GOOGLE_ANALYTICS_ID}`;
    script1.onload = () => {
      const script2 = this.document.createElement('script');
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${environment.GOOGLE_ANALYTICS_ID}');
      `;
      this.document.head.appendChild(script2);
    };
    this.document.head.appendChild(script1);
  }
}
