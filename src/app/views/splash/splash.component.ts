import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
   selector: 'app-splash',
   templateUrl: './splash.component.html',
   styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

   form: FormGroup;
   private formSubmitAttempt: boolean;

   constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService
   ) { }

   ngOnInit() {
      this.formSubmitAttempt = false;
      this.form = this.formBuilder.group({
         username: ['', Validators.required],
         password: ['', Validators.required]
      });
   }

   isFieldInvalid(field: string) {
      // Field is invalid if:
      // a) the field is invalid and it has been touch 
      //   or 
      // b) the field has not been touched but the form has been submitted.
      return (
         (!this.form.get(field).valid && this.form.get(field).touched) ||
         (this.form.get(field).untouched && this.formSubmitAttempt)
      )
   }

   onSubmit() {
      if (this.form.valid) {
         this.authService.signup(this.form.value);
      }
      this.formSubmitAttempt = true;
   }

}
