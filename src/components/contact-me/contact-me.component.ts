import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment.variables';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      subject: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  sendEmail(): void {
    if (this.contactForm.valid) {
      const form = this.contactForm.value;
      emailjs
        .send(
          environment.EMAILJS_SERVICE_ID,
          environment.EMAILJS_TEMPLATE_ID,
          {
            firstName: form.firstName,
            lastName: form.lastName,
            subject: form.subject,
            email: form.email,
            message: form.message,
          },
          environment.EMAILJS_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            alert('Your message has been sent!');
            this.contactForm.reset();
          },
          (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send your message. Please try again later.');
          },
        );
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
