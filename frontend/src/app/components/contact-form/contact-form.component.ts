import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.http.post('/api/contact', this.contactForm.value).subscribe({
      next: () => alert('Message sent!'),
      error: () => alert('Something went wrong.')
    });
  }
}

