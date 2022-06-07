import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: LoginService) {}

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
