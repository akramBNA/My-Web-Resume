import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactMeComponent {
  contactForm: FormGroup;
  isLoading = false;

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
    if (!this.contactForm.valid) {
      Swal.fire({
        text: 'Please fill in all required fields.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f39c12',
      });
      return;
    }

    this.isLoading = true;
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
      .then(() => {
        this.sendAutoReply(form);

        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
        });

        this.contactForm.reset();
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'There was an issue sending your message. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#d33',
        });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  sendAutoReply(form: any) {
    emailjs
      .send(
        environment.EMAILJS_SERVICE_ID,
        environment.EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
        },
        environment.EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        console.log('Auto-reply sent successfully!');
      })
      .catch((error) => {
        console.error('Auto-reply not sent!', error);
      });
  }
}
