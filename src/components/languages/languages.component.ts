import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-languages',
  standalone: true,
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | null = null;

  labels = ['Arabic', 'English', 'French', 'Turkish'];
  values = [100, 90, 85, 90];
  colors = [
    'rgba(34, 197, 94, 0.8)',
    'rgba(59, 130, 246, 0.8)',
    'rgba(249, 115, 22, 0.8)',
    'rgba(234, 179, 8, 0.8)'
  ];

  selectedKind: 'radar' | 'bar' = 'bar';

  ngAfterViewInit(): void {
    this.createChart('bar');
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  createChart(kind: 'radar' | 'bar') {
    this.selectedKind = kind;

    this.destroyChart();

    if (kind === 'radar') {
      this.chart = new Chart('languagesCombinedChart', {
        type: 'radar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Proficiency (%)',
              data: this.values,
              backgroundColor: 'rgba(34,197,94,0.12)',
              borderColor: 'rgba(34,197,94,0.9)',
              borderWidth: 2,
              pointBackgroundColor: this.colors,
              pointBorderColor: '#fff',
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: { line: { tension: 0.25 } },
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: { stepSize: 20, callback: (v: any) => `${v}%` },
              pointLabels: { font: { size: 14 } }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx: any) => `${this.labels[ctx.dataIndex]}: ${ctx.formattedValue}%`
              }
            }
          }
        }
      });
    } else {
      const labelsWithPercent = this.labels.map((l, i) => `${l}\n${this.values[i]}%`);

      this.chart = new Chart('languagesCombinedChart', {
        type: 'bar',
        data: {
          labels: labelsWithPercent,
          datasets: [
            {
              label: 'Proficiency (%)',
              data: this.values,
              backgroundColor: this.colors,
              borderRadius: 8,
              barThickness: 36,
            }
          ]
        },
        options: {
          indexAxis: 'x',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 10,
                callback: (v: any) => `${v}%`
              }
            },
            x: {
              ticks: {
                callback: (tickValue: string | number, index: number, ticks: any[]) => tickValue,
                font: { size: 14 }
              }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx: any) => `${this.labels[ctx.dataIndex]}: ${ctx.formattedValue}%`
              }
            }
          }
        }
      });
    }
  }

  private destroyChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
}
