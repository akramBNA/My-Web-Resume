import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private visitorCount = new BehaviorSubject<number>(0);
  visitorCount$ = this.visitorCount.asObservable();

  constructor(private cookieService: CookieService) {}

  trackVisits() {
    if (!this.cookieService.check('visitor_id')) {
      const uniqueId = Math.random().toString(36).substring(2, 15);
      this.cookieService.set('visitor_id', uniqueId, 365);
      this.cookieService.set('visit_count', '1', 365);
      this.visitorCount.next(1);
    } else {
      let visitCount = Number(this.cookieService.get('visit_count')) || 0;
      visitCount++;
      this.cookieService.set('visit_count', visitCount.toString(), 365);
      this.visitorCount.next(visitCount);
    }
  }

  getVisitorCount(): number {
    return Number(this.cookieService.get('visit_count')) || 0;
  }
}
