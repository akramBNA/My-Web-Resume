import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | null = null;
  private donutCharts: Chart[] = [];

  labels = ['Arabic', 'English', 'French', 'Turkish'];
  values = [100, 90, 85, 90];
  colors = [
    'rgba(34,197,94,0.9)',
    'rgba(59,130,246,0.9)',
    'rgba(249,115,22,0.9)',
    'rgba(234,179,8,0.9)',
  ];

  selectedKind: 'radar' | 'bar' | 'donut' = 'donut';

  ngAfterViewInit(): void {
    this.createChart(this.selectedKind);
  }

  ngOnDestroy(): void {
    this.destroyCharts();
  }

  createChart(kind: 'radar' | 'bar' | 'donut') {
    this.selectedKind = kind;
    this.destroyCharts();

    setTimeout(() => {
      if (kind === 'radar') {
        this.chart = new Chart('languagesCombinedChart', {
          type: 'radar',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'Proficiency (%)',
                data: this.values,
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: this.colors[0],
                borderWidth: 2,
                pointBackgroundColor: this.colors,
                pointBorderColor: '#000',
                pointHoverRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                suggestedMin: 0,
                suggestedMax: 100,
                grid: { color: 'rgba(255,255,255,0.2)' },
                angleLines: { color: 'rgba(255,255,255,0.2)' },
                pointLabels: { color: '#fff', font: { size: 14 } },
                ticks: {
                  color: '#fff',
                  stepSize: 20,
                  callback: (v: any) => `${v}%`,
                },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#111',
                titleColor: '#fff',
                bodyColor: '#fff',
              },
            },
          },
        });
      } else if (kind === 'bar') {
        this.chart = new Chart('languagesCombinedChart', {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'Proficiency (%)',
                data: this.values,
                backgroundColor: this.colors,
                borderRadius: 8,
                barThickness: 36,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                min: 0,
                max: 100,
                ticks: {
                  color: '#fff',
                  stepSize: 10,
                  callback: (v: any) => `${v}%`,
                },
                grid: { color: 'rgba(255,255,255,0.2)' },
              },
              x: {
                ticks: { color: '#fff', font: { size: 14 } },
                grid: { color: 'transparent' },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#111',
                titleColor: '#fff',
                bodyColor: '#fff',
              },
            },
          },
        });
      } else if (kind === 'donut') {
        this.labels.forEach((lang, i) => {
          const ctx = document.getElementById(
            `donutChart${i}`,
          ) as HTMLCanvasElement;
          if (!ctx) return;

          const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: [lang, ''],
              datasets: [
                {
                  data: [this.values[i], 100 - this.values[i]],
                  backgroundColor: [this.colors[i], 'rgba(255,255,255,0.1)'],
                  borderWidth: 0,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              cutout: '70%',
              plugins: {
                legend: { display: false },
                tooltip: {
                  enabled: true,
                  backgroundColor: '#111',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  titleFont: { weight: 'bold', size: 14 },
                  bodyFont: { size: 13 },
                  callbacks: {
                    label: function (context) {
                      if (context.dataIndex === 0) {
                        const label = context.chart.data.labels?.[0] || '';
                        const value = context.dataset.data?.[0] || 0;
                        return `${label}: ${value}%`;
                      }
                      return '';
                    },
                    title: () => '',
                  },
                },
              },
            },
          });
          this.donutCharts.push(chart);
        });
      }
    }, 0);
  }

  private destroyCharts() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    this.donutCharts.forEach((c) => c.destroy());
    this.donutCharts = [];
  }
}
