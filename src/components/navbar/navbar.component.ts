import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  downloadResume(): void {
    console.log('Download function triggered');

    const pdfUrl = 'assets/my-resume.pdf';
    const pdfName = 'Akram-resume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
        }
      }
    });
  }
}
