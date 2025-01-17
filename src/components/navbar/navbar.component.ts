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
// export class NavbarComponent {
//   isMenuOpen: boolean = false;
  
//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   downloadResume(): void {
//     console.log('Download function triggered');

//     const pdfUrl = 'assets/my-resume.pdf';
//     const pdfName = 'Akram-resume.pdf';

//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = pdfName;

//     document.body.appendChild(link);
//     link.click();

//     document.body.removeChild(link);
//   }

//   scrollTo(section: string) {
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }
  
// }

export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToAndCloseMenu(sectionId: string) {
    // Get the section element
    const element = document.getElementById(sectionId);

    if (element) {
      // Calculate the offset (e.g., height of the navbar)
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;

      // Scroll to the element with an offset
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }

    // Close the menu
    this.isMenuOpen = false;
  }
}

