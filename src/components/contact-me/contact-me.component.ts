import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment.variables';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
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
    if (this.contactForm.valid) {
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
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
          }).then(() => {
            this.isLoading = false;
            this.contactForm.reset();
            this.sendAutoReply();
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Error!',
            text: 'There was an issue sending your message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#d33',
          }).finally(() => {
            this.isLoading = false;
          });
        });
    } else {
      Swal.fire({
        text: 'Please fill in all fields.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f39c12',
      });
    }
  }

  sendAutoReply() {
    const form = this.contactForm.value;

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
