import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllTicketComponent } from './view-all-ticket.component';

const routes: Routes = [
  {
    path:'',component:ViewAllTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAllTicketRoutingModule { }
