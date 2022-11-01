import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketStatusRoutingModule } from './ticket-status-routing.module';
import { TicketStatusComponent } from './ticket-status.component';


@NgModule({
  declarations: [
    TicketStatusComponent
  ],
  imports: [
    CommonModule,
    TicketStatusRoutingModule
  ]
})
export class TicketStatusModule { }
