import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins-page',
  templateUrl: './admins-page.component.html',
  styleUrls: ['./admins-page.component.css']
})
export class AdminsPageComponent implements OnInit{

  currentAdmin:string=""
  logoutStatus:boolean=false
  adminacnt:any
  deleteConfirmStatus:boolean=false
  deleteSuccessMsg:string=""

  constructor(private api:ApiService,private dashboardRouter:Router){

  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAdminname')){
      alert('Please log in')
      this.dashboardRouter.navigateByUrl('login')
    }
    //get currentAdmin from local storage
    this.currentAdmin=localStorage.getItem("currentAdminname") || ''
  }

  logout(){
    //remove all data stored  in local storage  for this perticular user
  localStorage.removeItem('currentAdminname')

  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to login
    this.dashboardRouter.navigateByUrl('')
  },3000);
  }

  //deleteAccount()
  deleteAccount(){
    //data to be shared with child
    this.adminacnt =localStorage.getItem("currentAdminname")
    this.deleteConfirmStatus = true
  }

  //cancelDeleteConfirm()
  cancelDeleteConfirm(){
    this.adminacnt=""
    this.deleteConfirmStatus = false
  }

  deleteFromParent(){
    this.api.deleteAdminacnt()
    .subscribe((result:any)=>{
      localStorage.removeItem('currentAdminname')
       
      this.deleteSuccessMsg=result.message
      this.deleteConfirmStatus = true
      setTimeout(()=>{
        this.dashboardRouter.navigateByUrl('')
      },3000);
    })
  }

}

