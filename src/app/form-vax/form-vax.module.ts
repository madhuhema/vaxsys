import { NgModule } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';



export function patternValidation(err: any, field: FormlyFieldConfig) {
  return `${field.templateOptions?.label} should match the required field pattern ${field.templateOptions?.['patternMessage'] || ''}`;
}

export function fieldMatchValidator(control: AbstractControl) {

  const { Password, ConfirmPassword } = control?.value || {};

  // avoid displaying the message error when values are empty
  if (!ConfirmPassword || !Password) {
    return null;
  }

  if (ConfirmPassword === Password) {
    return null;
  }

  return { fieldMatch: { message: 'Passwords do not match' } };
}


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'pattern', message: patternValidation }
      ],
      validators: [
        { name: 'fieldMatch', validation: fieldMatchValidator },
      ]
    }),
    FormlyMaterialModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule
  ]
})
export class FormVaxModule { }
