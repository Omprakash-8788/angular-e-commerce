import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  userName: any = '';

  submit(first_name: string) {
    alert(`${first_name} your form is submitted successfully`);
  }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  loginUser() {
    this.name?.setValue('');
    this.email?.setValue('');
    this.subject?.setValue('');
    this.message?.setValue('');
    console.log(this.name);
  }
  get name() {
    return this.loginForm.get('name');
  }
  get subject() {
    return this.loginForm.get('subject');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get message() {
    return this.loginForm.get('message');
  }
}
