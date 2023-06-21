import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  adminsreg:any
constructor(private api:ApiService){}

  ngOnInit(): void {
   this.api.gerAllAdmins()
   .subscribe((result)=>{
    console.log(result);
    this.adminsreg = result
   }) 
  }


}
