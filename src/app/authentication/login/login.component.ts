import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginform.controls; }
  
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    
    if (this.loginform.invalid) {      
      return;    
    }
    
    this.loading = true;
    var userinfo = {
      username: this.f.username.value,
      password: this.f.password.value,
      Remember: false
    };
    
    this.authenticationService.login(userinfo)    
    .pipe(first())    
    .subscribe(data => {      
      this.router.navigate([this.returnUrl]);                 
    },    
    error => {      
      this.error = error;      
      this.loading = false;    
    });    
  }

  // constructor() {}

  // loginform = true;
  recoverform = false;

  showRecoverForm() {
  //   // this.loginform = !this.loginform;
  //   this.recoverform = !this.recoverform;
  }
}
