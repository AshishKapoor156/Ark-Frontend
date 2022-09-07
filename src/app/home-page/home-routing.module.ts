import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchStationComponent } from './search-station/search-station.component';



const routes: Routes = [
  {path: 'login', component : LoginComponent },
  {path: 'Home', component : HomeComponent },
  {path: 'Search', component : SearchStationComponent },
  {path: '', redirectTo: '/',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
