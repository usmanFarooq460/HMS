import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-main-component',
  templateUrl: './pharmacy-main-component.component.html',
  styleUrls: ['./pharmacy-main-component.component.scss']
})
export class PharmacyMainComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    // localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isLoggedIn");
    this.router.navigate(['/'])
  }

}
