import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private service: LoginService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      seoTitle: ['', Validators.required],
      pageTitle: ['', Validators.required],
      metaTitle: ['', Validators.required],
      keywords: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.adminGetAll();
  }

  adminGetAll() {
    this.service.getAdmin().subscribe(
      (resp) => {
        console.log('admin resp: ', resp);
      },
      (err) => console.log('err: ', err)
    );
  }
}
