import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketStatusComponent } from './ticket-status.component';

const routes: Routes = [
  {
    path:'',component:TicketStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketStatusRoutingModule { }
