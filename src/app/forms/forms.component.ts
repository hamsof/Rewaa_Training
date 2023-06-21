import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  contactForm: FormGroup = new FormGroup({});

  preview: string = '';

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });

  }
  save() {
    this.preview = JSON.stringify(this.contactForm.value);
  }
}
