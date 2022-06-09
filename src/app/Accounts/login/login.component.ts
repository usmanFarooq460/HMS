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
      userName: ['', Validators.required],
      pasword: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.adminGetAll();
    console.log("date , ",new Date().toLocaleString());
      
  }

  adminGetAll() {
    this.service.getAdmin().subscribe(
      (resp) => {
        console.log('admin resp: ', resp);
      },
      (err) => console.log('err: ', err)
    );
  }

  submit() {
    console.log('Form Fields', this.loginForm);
    console.log('Password Value', this.loginForm.value.pasword);
  }
}
