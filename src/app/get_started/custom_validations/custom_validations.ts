import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomValidations {
  constructor() {

  }
  passwordMatcher(c: AbstractControl) {
    const passwordControl = c.get('password');
    const confirmPasswordControl = c.get('confirmPassword');
    if (passwordControl === confirmPasswordControl) {
      return null;
    } else {
      return { 'match': true }
    }
  }
}
