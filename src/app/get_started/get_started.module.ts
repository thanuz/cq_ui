
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from './get_started.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidations } from './custom_validations/custom_validations';


@NgModule({
  declarations: [
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'start', component: GetStartedComponent }
    ])
  ],
  providers: [CustomValidations]
})
export class GetStartedModule {

}
