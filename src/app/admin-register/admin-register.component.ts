import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {

  adminRegisterForm = this.fb.group({
    adminName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    adminPswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    adminMobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
    adminEmail:['',[Validators.required,Validators.email]],
    adminimage:['',[Validators.required]]
  })
constructor(private fb:FormBuilder,private api:ApiService,private adminRegisterRouter:Router){}

 adminRegister(){
  
if(this.adminRegisterForm.valid){
 let adminName=this.adminRegisterForm.value.adminName
   let adminPswd = this.adminRegisterForm.value.adminPswd
   let adminMobile = this.adminRegisterForm.value.adminMobile
   let adminEmail = this.adminRegisterForm.value.adminEmail
   let adminimage = this.adminRegisterForm.value.adminimage

  this.api.adminRegister(adminName,adminPswd,adminMobile,adminEmail,adminimage)
  .subscribe((result:any)=>{
 alert(result.message);
//redirect to adminlogin page
setTimeout(()=>{
  this.adminRegisterRouter.navigateByUrl('admin-login')
},3000);

  },
//400 response
(result:any)=>{
  alert(result.error.message)
  this.adminRegisterForm.reset()
}
   )

  }
  else{
    alert('invalid')
  }
 }


}
