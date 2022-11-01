import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAllTicketRoutingModule } from './view-all-ticket-routing.module';
import { ViewAllTicketComponent } from './view-all-ticket.component';


@NgModule({
  declarations: [
    ViewAllTicketComponent
  ],
  imports: [
    CommonModule,
    ViewAllTicketRoutingModule
  ]
})
export class ViewAllTicketModule { }
