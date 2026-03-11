import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private visitorCount = new BehaviorSubject<number>(0);
  visitorCount$ = this.visitorCount.asObservable();

  private API_URL = environment.VISITOR_COUNT_API_URL;

  constructor() {}

  trackVisits() {
    if (!sessionStorage.getItem('visited')) {
      fetch(this.API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.visitorCount.next(Number(data.value));
        })
        .catch((err) => console.error('Visitor counter error:', err));

      sessionStorage.setItem('visited', 'true');
    } else {
      fetch(this.API_URL.replace('/hit/', '/get/'))
        .then((res) => res.json())
        .then((data) => {
          this.visitorCount.next(Number(data.value));
        });
    }
  }

  getVisitorCount(): number {
    return this.visitorCount.value;
  }
}
