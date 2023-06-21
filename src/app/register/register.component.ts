import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pswCheck:any=false
  registerForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
    email:['',[Validators.required,Validators.email]]
    
    
    })

constructor(private fb:FormBuilder,private api:ApiService,private registerRouter:Router){}

//registr
register(){
  
  let uname = this.registerForm.value.uname
  let pswd = this.registerForm.value.pswd
  let mobile = this.registerForm.value.mobile
  let email = this.registerForm.value.email
 
if(this.registerForm.valid){
//   //call register of api
  this.api.register(uname,pswd,mobile,email)
  .subscribe((result:any)=>{
    alert(result.message);
  // })
// }
    //redrict to login page
 setTimeout(()=>{
 this.registerRouter.navigateByUrl('login')
   },3000);
    
   },

  //400 error message
  (result)=>{
    alert(result.error.message)
    this.registerForm.reset()
  }
   )
  
 }
  
else{
    alert('invalid form')
  }





}
 }
