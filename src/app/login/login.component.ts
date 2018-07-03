import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormValues;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.loginFormValues = {
      email: ['', Validators.required],
      password: ['', Validators.required]
    };
  }
  createForm() {
    this.loginForm = this.fb.group(this.loginFormValues);
  }
  clear(): void {
    this.loginForm.reset();
  }
  submitForm(): void {
    console.log(this.loginForm);
  }


}
