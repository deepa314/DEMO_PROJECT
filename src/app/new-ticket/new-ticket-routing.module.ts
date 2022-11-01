import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTicketComponent } from './new-ticket.component';

const routes: Routes = [
  {
    path:'',component:NewTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTicketRoutingModule { }
