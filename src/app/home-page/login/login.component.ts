import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import {HomeComponent} from 'src/app/home-page/home/home.component';
// we use formbuilder to shorten the code and not make instance of form control and form group
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends HomeComponent implements OnInit  {
//We will be putting validators at page level(html)
// Inbuilt validations are : required,requiredTrue,email,pattern,min,max,minLength,maxLength. 

//public fb:FormBuilder;
UserDetails : FormGroup = this.fb.group({
    UserName : ['',Validators.required],//first value of aray is default value of that col and second is validator.
    password : [''],
  })
//, Validators.minLength, Validators.maxLength]
  constructor(public fb: FormBuilder) {
    super(fb);
   
   }//formbuilder is service that's why we need to declare it in constructor

   //custom : FormGroup = this.formgrp_object();  
   
 
  ngOnInit(): void {
    this.Customer.get('Customermobile')?.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
        

      }
    );
    this.Customer?.valueChanges.subscribe(
      (value: string) => {
        console.log(JSON.stringify(value));
        

      }
    );
    //JSON.stringify(value)
  }



  CallApi(): void
  {
    
console.log(this.UserDetails.controls.UserName.value);
console.log(this.Customer.controls.Customermobile.value);
//console.log(this.Customer.AdditionalCustomer.value);
//console.log(this.Customer.get('CustomerName').value);

 }

}
