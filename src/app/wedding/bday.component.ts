import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bday',
  templateUrl: './bday.component.html',
  styleUrls: ['./bday.component.css']
})
export class BdayComponent implements OnInit{

isCollapse:boolean = true
currentUser:string=""

//get all additems
addBdayitems:any=[]
constructor(private api:ApiService){}

ngOnInit(){
  this.currentUser=localStorage.getItem("currentUsername")|| ''
  this.api.getAllAdditems().subscribe((result)=>{
    console.log(result);
    this.addBdayitems = result
  })
}

collapse(){
  this.isCollapse = !this.isCollapse
}
}
