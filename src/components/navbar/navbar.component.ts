import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  activeSection: string = '';

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    const sections = [
      'about',
      'contact-details',
      'experience',
      'skills',
      'education',
      'languages',
      'certificates',
      'contact-me',
    ];

    const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  scrollToAndCloseMenu(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
      this.isMenuOpen = false;
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 500);
    }
  }
}
