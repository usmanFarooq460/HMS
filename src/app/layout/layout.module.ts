import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    TopBarComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TopBarComponent,
    SideBarComponent
  ]
})
export class LayoutModule { }
