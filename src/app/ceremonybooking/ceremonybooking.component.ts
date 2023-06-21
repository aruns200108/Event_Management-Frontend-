import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ceremonybooking',
  templateUrl: './ceremonybooking.component.html',
  styleUrls: ['./ceremonybooking.component.css']
})
export class CeremonybookingComponent {

  ceremonybookForm = this.fb.group({
  // babyname:['',[Validators.required]],
  username:['',[Validators.required]],
  mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
  email:['',[Validators.required,Validators.email]],
  address:['',[Validators.required]],
  doe:['',[Validators.required]],
  event:['',[Validators.required]],
  place:['',[Validators.required]],
  packag:['',[Validators.required]],
  // fname:['',[Validators.required]]
  // mname:['',[Validators.required]],
  // dob:['',[Validators.required]],
  // gender:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,private api:ApiService,private bookingRouter:Router){}

  ceremonyBook(){
    // let babyname=this.ceremonybookForm.value.babyname
    let username=this.ceremonybookForm.value.username
    let mobile=this.ceremonybookForm.value.mobile
    let email=this.ceremonybookForm.value.email
    let address=this.ceremonybookForm.value.address
    let doe=this.ceremonybookForm.value.doe
    let event=this.ceremonybookForm.value.event
    let place=this.ceremonybookForm.value.place
    let packag=this.ceremonybookForm.value.packag
    // let fname=this.ceremonybookForm.value.fname
    // let mname=this.ceremonybookForm.value.mname
    // let dob=this.ceremonybookForm.value.dob
    // let gender=this.ceremonybookForm.value.gender

    if(this.ceremonybookForm.valid){
                                //babyname,                                   //fname,mname,dob,gender
      this.api.ceremonyBooking(username,mobile,email,address,doe,event,place,packag,)
      .subscribe((result:any)=>{
        alert(result.message);
        this.bookingRouter.navigateByUrl('/dashboard')
      },
      (result:any)=>{
        alert(result.error.message)
        this.ceremonybookForm.reset()
      }
      )
        }
    else{
      alert('Invalid Form')
    }
  }

}
