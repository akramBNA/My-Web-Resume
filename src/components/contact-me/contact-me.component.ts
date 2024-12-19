import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment.variables';
import Swal from 'sweetalert2';


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
        .then(response => {
          // console.log("Response: ", response);
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6'
          }).then( confirm => {
            if(confirm){
              this.contactForm.reset();
            }
          });
        })
        .catch(error => {
          // console.log("Response: ", error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an issue sending your message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#d33'
          });
        });
        //this.contactForm.reset();
    } else {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill in all fields correctly.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f39c12'
      });
    }
  }
}
