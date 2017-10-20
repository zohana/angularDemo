import { UsernameValidators } from './../common/validators/username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ],
        [  UsernameValidators.shouldBeUnique]
      ),
      password: new FormControl('', Validators.required, [UsernameValidators.shouldBeUnique])
           
    })    
  });

  get username() {
    //console.log(this.form.get('account.username')); 
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  login(){
    //console.log(this.form.value);   
    this.form.setErrors({
      invalidLogin:true
    });
  }
}
