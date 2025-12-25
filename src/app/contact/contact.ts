
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.maxLength(20)]],
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      Phone: ['', [Validators.required, Validators.pattern(/^9[78]\d{8}$/)]],
      Country: ['', [Validators.required, Validators.maxLength(20)]],
      Message: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  get f() {
    return this.myForm.controls;
  }

  submit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      alert('Form Submiited Succesfully');
      this.clearInput();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
  clearInput() {
    this.myForm.reset();
  }
}
