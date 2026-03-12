import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  currentDate: string = '';
  timeZone: string = '';
  isDaytime: boolean = true;
  private timer: any;

  ngOnInit(): void {
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);

    const subtitleText = 'Full-Stack JavaScript Developer';
    const subtitleEl = document.querySelector(
      '.typing-subtitle',
    ) as HTMLElement;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (subtitleEl) {
        subtitleEl.textContent = subtitleText.substring(0, index);
        index++;
        if (index > subtitleText.length) clearInterval(typingInterval);
        subtitleEl.classList.add('typed');
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    this.currentDate = now.toLocaleDateString([], {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    const hour = now.getHours();
    this.isDaytime = hour >= 6 && hour < 18;
  }

  scrollToContact() {
    const section = document.getElementById('contact-me');

    if (section) {
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  }
}
