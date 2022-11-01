import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    NavTabsComponent,
    SidenavListComponent,
    ToolbarComponent
  

  ],
  imports: [
   
    FormsModule,
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
   // FlexLayoutModule,
  
  ],
  exports: [
    NavTabsComponent,
    SidenavListComponent,
    ToolbarComponent,
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // FlexLayoutModule,
    
   

  ],

  providers: []
})
export class SharedModule { }
