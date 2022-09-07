import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { customevalidators } from 'src/app/Shared/Custome.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public fb: FormBuilder) {
  }



  //@@@@@@@Traditional way to declare form group@@@@@@@@@
  // Customer: FormGroup = new FormGroup({
  //   CustomerName: new FormControl('',Validators.required),
  //   Customermobile: new FormControl(),
  //   BusType: new FormControl(),
  //   AdditionalCustomer: new FormGroup({
  //     AdditionalCustomerName: new FormControl()
  //   })
  // });

  Customer: FormGroup = this.fb.group({

    // CustomerName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    // Customermobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^[0-9]\d*$/)]],
    noOfSeat: ['1', [Validators.required, Validators.min(1), Validators.max(12)]],
    ContactPreference: ['Customermobile'],
    Customermobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^[0-9]\d*$/)]],
    Customeremail: [''],
    BusType: ['Sleeper', Validators.required],
    CityName: ['Indore', [Validators.required]],

    AdditionalCustomer: this.fb.group({
      BusOperator: ['Kartik Bhai', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      AdditionalCustomerName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    }),
    SearchBus: this.fb.group({
      From: ['Indore', [Validators.required]],
      To: ['', [Validators.required]],
      Calender: ['',[Validators.required]]
    }),
    CustomerDetails: this.fb.array([this.PassengerDetails()])
  });

 
  
  // for dynamic control ... 
  PassengerDetails(): FormGroup {

    
    return this.fb.group({
      CustomerName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Age: ['', [Validators.required, Validators.min(1)]]
    })
  };

 
  formgrp_object(): FormGroup
  {
    return this.Customer;
  }

  // fun to add or remove cuustomer details fields
  Passengerform(seatno: any): void {

    let len = (<FormArray>this.Customer.get('CustomerDetails')).length + 1;

    console.log("length index " + len.toString());
    if (seatno == len) {
      console.log("in add col");
      (<FormArray>this.Customer.get('CustomerDetails')).push(this.PassengerDetails());
    }
    else {
      this.AddDetail.removeAt(seatno);
      console.log("in remove col");
    }
  };

  // to display filed in page
  get AddDetail() {
    return this.Customer.get('CustomerDetails') as FormArray;
  }

  // removeDetail(index : any) {
  //   console.log("remove index "+index);
  //   this.AddDetail.removeAt(index);

  //   var inputF = document.getElementById("noOfSeat");

  //   inputF?.setAttribute('value', index);

  //   let len = (<FormArray>this.Customer.get('CustomerDetails')).length;
  //   len-1;

  //   console.log("length index "+len.toString());
  //   inputF?.setAttribute('value', len.toString());
  // }
  // myFunction(n : any) {
  //   console.log("fun val "+n);

  // }

  // *ngFor="let skill of employeeForm.get('skills')['controls']"
  //   <div formArrayName = "CustomerDetails" *ngFor ="let detail of Customer.get('CustomerDetails')['controls']">


  // added any type because i was giving problem for casting.
  errorMessages: any = {
    'CustomerName': {
      'required': 'Full Name required',
      'minlength': 'Min length should be 2',
      'maxlength': 'Max length should be 20'
    },
    'Age': {
      'required': 'Please enter Age',
      'min': 'Min Age should be 1'
    },
    'Customermobile': {
      'required': 'Mobile Number required',
      'minlength': 'Min length should be 10',
      'maxlength': 'Max length should be 11',
      'pattern': 'Please enter the vaild numbers'
    },
    'Customeremail': {
      'required': 'Email is required',
      'emaildomain': 'Please enter proper email id (Ex.abc@gmail.com)'
    },
    'noOfSeat': {
      'required': ' Please fill required seats',
      'min': 'Min seats should be 1',
      'max': 'Max seats should be 12'
    },
    'BusType': {
      'required': 'BusType required',
    },
    'CityName': {
      'required': 'CityName required',
    },

    'BusOperator': {
      'required': ' BusOperator required',
      'minlength': 'Min length should be 2',
      'maxlength': 'Max length should be 20'
    },
    'AdditionalCustomerName': {
      'required': ' Additional Customer Name required',
      'minlength': 'Min length should be 2',
      'maxlength': 'Max length should be 20'
    },
    'From': {
      'required': ' Source Station required'
    },
    'To': {
      'required': ' Destination Station required'
    },
    'Calender': {
      'required': ' Please choose Date'
    }
  };


  FormErrors: any =
    {
      'CustomerName': '',
      'Age': '',
      'Customermobile': '',
      'Customeremail': '',
      'noOfSeat': '',
      'BusType': '',
      'CityName': '',

      'BusOperator': '',
      'AdditionalCustomerName': '',

      'From': '',
      'To': '',
      'Calender': '',
    };



  ngOnInit() {

    this.Customer.controls.Customeremail.disable();

    // demo for value changes*******************
    this.Customer.get('ContactPreference')?.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
        this.PreferedValidation(value);

      }
    );

    this.Customer?.valueChanges.subscribe(
      (value: string) => {
        console.log("DATA review  "+this.Customer.value );
        //this.PreferedValidation(value);

      }
    );

    this.Customer.get('noOfSeat')?.valueChanges.subscribe(
      (noofseat: number) => {

        if (noofseat >= 1) {
          console.log("Entered seatno " + noofseat);
          this.Passengerform(noofseat);
        }
      }
    );

    // this.Customer.valueChanges.subscribe(
    //   value => {
    //     this.ValidateValues(this.Customer);
    //   //  console.log(this.FormErrors);
    //     //console.log(JSON.stringify(value))
    //   }
    // );

  }




  CallApi(): void {
  //  this.Customer.markAllAsTouched();
    this.ValidateValues(this.Customer);
    console.log(this.Customer.value);
   // console.log(this.Customer.controls.CustomerName.value);
   // console.log(this.Customer.controls.ContactPreference.value);

    //console.log(this.Customer.AdditionalCustomer.value);
    //console.log(this.Customer.get('CustomerName').value);

  }
  Loaddata(): void {
    //this.Customer.markAllAsTouched();
    // this.ValidateValues(this.Customer);
    // console.log(this.FormErrors);
    this.Customer.setValue({
      CustomerName: 'Kapoor',
      Customermobile: '9960249712',
      ContactPreference: 'Customermobile',
      Customeremail: 'abc@gmail.com',
      CityName: 'Indore',
      BusType: 'Sleeper',
      AdditionalCustomer: {
        BusOperator: 'kartik',
        AdditionalCustomerName: 'Ashish'
      }
    })
  }
  // sample data 
  LoadSomedata(): void {
    this.Customer.patchValue({
      CustomerName: 'Kapoor',
      Customermobile: '9960249712',
      //  BusType: 'Sleeper',
      AdditionalCustomer: {
        AdditionalCustomerName: 'Ashish'
      }
    })
  }

  //onchoice valiation
  PreferedValidation(selectedvalue: string): void {
    // console.log("Inside PreferedValidation " + selectedvalue);
    const controlname = this.Customer.get('Customeremail');
    // console.log("controlname " + controlname);

    //controlname?.disabled;
    if (selectedvalue === 'Customeremail') {
      controlname?.enable();
      //   console.log("Inside if");
      controlname?.setValidators([Validators.required, customevalidators.emaildomain('gmail.com')]);//used custome validators
    }
    else {
      //  console.log("Inside else");
      controlname?.clearValidators();
      controlname?.disable();

    }
    //   console.log("outside if");
    controlname?.updateValueAndValidity();

  }


  //looping controls in group 
  ValidateValues(group: FormGroup): void {
    //ObjectConstructor.keys(o: object): string[] = Returns the names of the enumerable string properties and methods of an object.
    Object.keys(group.controls).forEach(
      (keyss: any) => {
        const abstractcontrol = group.get(keyss);
        const kk = keyss.toString();
     //   console.log("Validation keys " + kk);


        if (abstractcontrol instanceof FormArray) {

          for (const control of abstractcontrol.controls) {

            if (control instanceof FormGroup) {
              if (control && !control?.valid && (control.dirty || control.touched)) {
               // console.log("FormArray keys " + control);
                this.ValidateValues(control);
              }
            }
          }
        }

        if (abstractcontrol instanceof FormGroup) {

          //abstractcontrol.disable();

          this.ValidateValues(abstractcontrol);

        }
        else {
          this.FormErrors[keyss] = '';
          // console.log("Key = " +keyss + "  Value = " + abstractcontrol?.value);
          if (abstractcontrol && !abstractcontrol?.valid && (abstractcontrol.dirty || abstractcontrol.touched)) {
            const Message = this.errorMessages[keyss];
            //console.log(Message);
            //console.log(Message);
            console.log("occur error " + abstractcontrol.errors);

            for (const errorkey in abstractcontrol.errors) {
              if (errorkey) {
                console.log(errorkey);
                console.log(Message[errorkey]);
                this.FormErrors[keyss] += Message[errorkey] + ' ';

              }
            }

          }
        }
      }
    )

  }

}
