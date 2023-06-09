import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AutorizedViewContactComponent } from './autorized-view-contact/autorized-view-contact.component';
import { PublicContactsComponent } from './public-contacts/public-contacts.component'
import { LoginComponent } from './login/login.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorizedViewContactComponent,
    PublicContactsComponent,
    LoginComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
