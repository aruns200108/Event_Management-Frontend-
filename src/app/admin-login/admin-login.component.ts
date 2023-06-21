import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  successMsg:boolean = false

 

 //error
  errorMsg:string=""

adminLoginForm = this.fb.group({
  adminName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  adminPswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})
constructor(private fb:FormBuilder,private api:ApiService,private adminLoginRouter:Router){}

adminLogin(){
  if(this.adminLoginForm.valid){
    let adminName = this.adminLoginForm.value.adminName
    let adminPswd = this.adminLoginForm.value.adminPswd

     //adminlogin api call
  this.api.adminLogin(adminName,adminPswd)
  .subscribe((result:any)=>{

    //login success
     this.successMsg = true

    //get adminName from result and store in localstroage
     localStorage.setItem("currentAdminname",result.currentAname)
    
   //==>>  //store token in local storage
    localStorage.setItem("token",JSON.stringify(result.token))

  //  ===>>store curret admin name
  localStorage.setItem("currentAdminname",result.currentAdminname)


     //redirect to admin-dashboard
     setTimeout(()=>{
this.adminLoginRouter.navigateByUrl('admins-page')
     });
   },

   (result:any)=>{
   this.errorMsg = result.error.message
    //after 3s refresh loginpage and error msg
    setTimeout(()=>{
      this.adminLoginForm.reset()
      this.errorMsg=""
    },3000);
   }
   )
  }
else{
  alert('invalid form')
}
}
 }
