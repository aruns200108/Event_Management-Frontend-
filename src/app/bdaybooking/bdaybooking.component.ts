import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bdaybooking',
  templateUrl: './bdaybooking.component.html',
  styleUrls: ['./bdaybooking.component.css']
})
export class BdaybookingComponent {

bdayBooking = this.fb.group({
  // babyname:['',[Validators.required]],
  username:['',[Validators.required]],
  mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
  email:['',[Validators.required,Validators.email]],
  address:['',[Validators.required]],
  doe:['',[Validators.required]],
  event:['',[Validators.required]],
  place:['',[Validators.required]],
  packag:['',[Validators.required]],
  // fname:['',[Validators.required]],
  // mname:['',[Validators.required]],
  // dob:['',[Validators.required]],
  // gender:['',[Validators.required]]

})

constructor(private fb:FormBuilder,private api:ApiService,private bookingRouter:Router){
}

//book
book(){
  
  // let babyname =this.bdayBooking.value.babyname
  let username =this.bdayBooking.value.username
  let mobile =this.bdayBooking.value.mobile
  let email =this.bdayBooking.value.email
  let address =this.bdayBooking.value.address
  let doe =this.bdayBooking.value.doe
  let event=this.bdayBooking.value.event
  let place =this.bdayBooking.value.place
  let packag =this.bdayBooking.value.packag
  // let fname =this.bdayBooking.value.fname
  // let mname =this.bdayBooking.value.mname
  // let dob =this.bdayBooking.value.dob
  // let gender =this.bdayBooking.value.gender

  if(this.bdayBooking.valid){

// alert(babyname+''+adress+''+mname)
//call booking of apiservice

                     //babyname,fname,mname,dob,gender
this.api.bdayBooking(username,mobile,email,address,doe,event,place,packag,)
.subscribe((result:any)=>{
  alert(result.message);
  this.bookingRouter.navigateByUrl('/dashboard')
},
(result:any)=>{
  alert(result.error.message)
  this.bdayBooking.reset()
 
})
  }
  else{
    alert('Invalid Form')
  }

}

}
