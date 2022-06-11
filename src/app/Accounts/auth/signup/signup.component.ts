import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private service: AccountsService) {}

  ngOnInit(): void {
    this.GetAdminList();
  }

  GetAdminList() {
    this.service.getAllAdmins().subscribe(
      (resp) => {
        console.log('admin list: ', resp);
      },
      (err) => {
        console.log('error occured during fetching data :', err);
      }
    );
  }

  
}
