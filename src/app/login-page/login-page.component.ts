import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  storage: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.storage = sessionStorage;
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    this.storage.setItem('username', username.value);
    this.storage.setItem('password', password.value);
    this.router.navigate(['features']);
  }
}
