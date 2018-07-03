import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidations } from './custom_validations/custom_validations';

@Component({
  templateUrl: './get_started.component.html',
  styleUrls: ['./get_started.component.css']
})

export class GetStartedComponent implements OnInit {
  userType = 'student';
  userForm: FormGroup;

  isUserTypeStudent = true;
  studentFormValues;
  professionalFormValues;
  constructor(private fb: FormBuilder, private cv: CustomValidations) {

  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.studentFormValues = {
      name: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      email: [''],
      password: ['', Validators.required]
    };
    this.professionalFormValues = { ...this.studentFormValues, company: '' };
  }

  createForm() {
    this.userForm = this.fb.group(this.studentFormValues);
  }

  selectUserType(userType: string) {
    this.isUserTypeStudent = userType === 'student';
    this.reSetUserForm();
  }

  submitForm(): void {
    console.log(this.userForm);
  }
  clear(): void {
    this.userForm.reset();
  }

  reSetUserForm() {
    this.userForm.reset();
    if (!this.isUserTypeStudent) {
      this.userForm = this.fb.group(this.professionalFormValues);
    } else {
      this.userForm = this.fb.group(this.studentFormValues);
    }
  }
}
