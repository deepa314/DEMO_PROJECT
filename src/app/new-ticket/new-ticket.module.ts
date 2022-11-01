import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTicketRoutingModule } from './new-ticket-routing.module';
import { NewTicketComponent } from './new-ticket.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    NewTicketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewTicketRoutingModule
  ]
})
export class NewTicketModule { }
