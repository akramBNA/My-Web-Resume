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
}
