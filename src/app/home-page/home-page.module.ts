import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchStationComponent } from './search-station/search-station.component';
import { HomeRoutingModule } from './home-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, LoginComponent,SearchStationComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule
    
  ],

  exports: [
    HomeComponent,
    SearchStationComponent,
    LoginComponent
  
  ]
})
export class HomePageModule { }
