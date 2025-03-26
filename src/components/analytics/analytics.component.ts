import { Component, inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment.variables';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {

  constructor(private cookieService: CookieService) {}
  private document = inject(DOCUMENT);

  ngOnInit() {
    this.addGoogleAnalytics();
    this.trackVisits();
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

  trackVisits() {
    if (!this.cookieService.check('visitor_id')) {
      const uniqueId = Math.random().toString(36).substring(2, 15);
      this.cookieService.set('visitor_id', uniqueId, 365);
      console.log('New visitor:', uniqueId);
    } else {
      let visitCount = Number(this.cookieService.get('visit_count')) || 0;
      visitCount++;
      this.cookieService.set('visit_count', visitCount.toString(), 365);
      console.log('You are a returning visitor:', this.cookieService.get('visitor_id'), ` - You have visited this site ${visitCount} times`);
    }
  }
}
