import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  formContact = this.fb.group({
    name: ['', [Validators.minLength(4), Validators.required]],
    subject: ['', [Validators.minLength(10), Validators.required]],
    telephone: ['', [Validators.minLength(11), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    message: ['', [Validators.minLength(20), Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendForm() {
    alert('Mensagem enviada com sucesso.');
    this.formContact.reset();
  }
}
