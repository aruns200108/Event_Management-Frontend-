import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbornbooking',
  templateUrl: './newbornbooking.component.html',
  styleUrls: ['./newbornbooking.component.css']
})
export class NewbornbookingComponent {

  newbornBookForm=this.fb.group({

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
  constructor(private fb:FormBuilder,private api:ApiService,private bookingRouter:Router){}

  //newbornBook()
  newbornBook(){
    
    // let babyname =this.newbornBookForm.value.babyname
  let username =this.newbornBookForm.value.username
  let mobile =this.newbornBookForm.value.mobile
  let email =this.newbornBookForm.value.email
  let address =this.newbornBookForm.value.address
  let doe =this.newbornBookForm.value.doe
  let event = this.newbornBookForm.value.event
  let place =this.newbornBookForm.value.place
  let packag =this.newbornBookForm.value.packag
  // let fname =this.newbornBookForm.value.fname
  // let mname =this.newbornBookForm.value.mname
  // let dob =this.newbornBookForm.value.dob
  // let gender =this.newbornBookForm.value.gender
  // alert(babyname+''+mobile+''+mname)
  if(this.newbornBookForm.valid){
//call newbornBoking api
                       // babyname                              //fname,mname,dob,gender
this.api.newbornBooking(username,mobile,email,address,doe,event,place,packag)
.subscribe((result:any)=>{
  alert(result.message);
  this.bookingRouter.navigateByUrl('/dashboard')
},
(result:any)=>{
  alert(result.error.message)
  this.newbornBookForm.reset()
}
)
  }
  else{
    alert('Invalid Form')
  }

}

}
