import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'main-layout-design',
  templateUrl: './main-layout-design.component.html',
  styleUrls: ['./main-layout-design.component.scss'],
})
export class MainLayoutDesignComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.checkingRouteChange();
    this.isLoggedIn == false ? this.router.navigate(['/accounts/login']) : '';
  }
  checkingRouteChange() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoggedIn =
          localStorage.getItem('isLoggedIn') == 'true' ? true : false;
      }
      if (event instanceof NavigationEnd) {
        this.isLoggedIn =
          localStorage.getItem('isLoggedIn') == 'true' ? true : false;
      }
    });
  }
  // checkingIsLoggedIn() {

  // }
}
