import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn:boolean=false
  loginForm: any;
  constructor(private service: AccountsService, private formBuilder: FormBuilder,private router:Router) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      pasword: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.adminGetAll();
    this.checkingIsLoggedIn()
    console.log('date , ', new Date().toLocaleString());
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
    let pass = '123';
    console.log('Form Fields', this.loginForm);
    console.log('Password Value', this.loginForm.value.pasword);
    if (this.loginForm.value.pasword == pass) {
      console.log('Loged in ');
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(["/"])
    } else {
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  checkingIsLoggedIn() {
    this.isLoggedIn =
      localStorage.getItem('isLoggedIn') == 'true' ? true : false;
    if (this.isLoggedIn == true) {
      this.router.navigate(['/']);
    } 
  }

}
