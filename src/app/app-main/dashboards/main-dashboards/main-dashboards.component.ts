import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboards',
  templateUrl: './main-dashboards.component.html',
  styleUrls: ['./main-dashboards.component.scss'],
})
export class MainDashboardsComponent implements OnInit {
  isLoggedIn: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkingIsLoggedIn();
  }

  checkingIsLoggedIn() {
    this.isLoggedIn =
      localStorage.getItem('isLoggedIn') == 'true' ? true : false;
    if (this.isLoggedIn == true) {
    } else {
      this.router.navigate(['/accounts/login']);
    }
  }

  logOut() {
    console.log('logging me out');
    this.router.navigate(['/accounts/login']);
    localStorage.removeItem('isLoggedIn');
  }
}
