import { PublicContactsComponent } from './public-contacts/public-contacts.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutorizedViewContactComponent } from './autorized-view-contact/autorized-view-contact.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: PublicContactsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contacts/:id',
    component: AutorizedViewContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateContactComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
