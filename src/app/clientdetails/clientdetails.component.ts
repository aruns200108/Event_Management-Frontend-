                                                      import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit{

  client:any
  clients:any
  clientss:any
  mobile:any
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllBdayDetails()
    .subscribe((result)=>{
      console.log(result)
      this.client = result
    })

    this.api.getAllNewbornDetails()
    .subscribe((result)=>{
      console.log(result)
      this.clients = result
    })

    this.api.getAllCeremonyDetails()
    .subscribe((result)=>{
      this.clientss=result
    })

  }

  // deleteUser
  deleteUser(){
  this.mobile = localStorage.getItem("currentMobile")
  }

}
