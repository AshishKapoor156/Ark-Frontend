import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HomePageModule } from '../home-page.module';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.css']
})
export class SearchStationComponent extends HomeComponent implements OnInit {

  constructor(public fb : FormBuilder) { 
    super(fb);
  }

  ngOnInit(): void {
  }

}

