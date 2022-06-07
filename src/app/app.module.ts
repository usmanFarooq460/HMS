import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Accounts/login/login.component';
import { SignupComponent } from './Accounts/signup/signup.component';
import { LayoutModule } from './app-main/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
