import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  visitorCount: number = 0;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.visitorCount = this.analyticsService.getVisitorCount();
    this.analyticsService.visitorCount$.subscribe(count => {
      this.visitorCount = count;
    });
  }
}
