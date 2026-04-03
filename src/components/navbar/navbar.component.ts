import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  activeSection: string = '';
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;

        if (this.currentRoute.includes('resume')) {
          this.activeSection = 'resume';
        }
      }
    });
  }

  onScroll() {
    if (this.currentRoute.includes('resume')) return;
    if (event instanceof NavigationEnd) {
      this.currentRoute = this.router.url;

      if (this.currentRoute.includes('resume')) {
        this.activeSection = 'resume';
      } else {
        this.activeSection = 'about';
      }
    }
    const sections = [
      'about',
      'services',
      'technologies',
      'projects',
      'contact-me',
    ];

    const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

    let currentSection = '';

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop - navbarHeight - 100;

        if (window.scrollY >= sectionTop) {
          currentSection = sectionId;
        }
      }
    }

    this.activeSection = currentSection;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;

    this.router.navigate([], { fragment: sectionId });

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }

    this.isMenuOpen = false;
    setTimeout(() => (document.body.style.overflow = 'auto'), 500);
  }
}
