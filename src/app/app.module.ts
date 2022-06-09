import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Accounts/login/login.component';
import { SignupComponent } from './Accounts/signup/signup.component';
import { LayoutModule } from './app-main/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutDesignComponent } from './main-layout-design/main-layout-design.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, MainLayoutDesignComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
