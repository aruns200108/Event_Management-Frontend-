import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbartwo',
  templateUrl: './navbartwo.component.html',
  styleUrls: ['./navbartwo.component.css']
})
export class NavbartwoComponent  implements OnInit {
  logoutStatus:boolean=false
  
  constructor(private api:ApiService,private dashboardRouter:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  },1000);
  }
}
