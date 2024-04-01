import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submit = (contactForm: NgForm) => {
    console.log(contactForm.value);
    console.log(contactForm.value.message);
  };
}
