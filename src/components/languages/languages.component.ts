import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart('arabicChart', 100, 'rgba(34, 197, 94, 0.8)');
    this.createChart('englishChart', 90, 'rgba(59, 130, 246, 0.8)');
    this.createChart('frenchChart', 70, 'rgba(249, 115, 22, 0.8)');
    this.createChart('turkishChart', 90, 'rgba(234, 179, 8, 0.8)');
  }
  createChart(chartId: string, percentage: number, color: string) {
    new Chart(chartId, {
      type: 'doughnut',
      data: {
        labels: [`${percentage}%`],
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: [color, '#e5e7eb'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });
  }

}
