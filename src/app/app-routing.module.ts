import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
   {
   
    path: 'sign-up', loadChildren: () =>
      import('./sign-up/sign-up.module').then(m => m.SignUpModule),
   
  },
  {
   
    path: 'login', loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule),
   
  },
  
 
  {
   
    path: 'dashboard', loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
   
  },
  {
   
    path: 'new-ticket', loadChildren: () =>
      import('./new-ticket/new-ticket.module').then(m => m.NewTicketModule),
   
  },
  {
   
    path: 'ticket-status', loadChildren: () =>
      import('./ticket-status/ticket-status.module').then(m => m.TicketStatusModule),
   
  },
  {
   
    path: 'view-all-ticket', loadChildren: () =>
      import('./view-all-ticket/view-all-ticket.module').then(m => m.ViewAllTicketModule),
   
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
