//C:\Aashish Kapoor\Node js\node_workspace\TicketBooking

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HomePageModule} from './home-page/home-page.module';
import {ReactiveFormsModule} from '@angular/forms';
//import { HomeComponent } from './home-page/home/home.component';
//import { LoginComponent } from './home-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HomePageModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
