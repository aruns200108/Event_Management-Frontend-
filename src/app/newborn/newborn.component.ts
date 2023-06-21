import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-newborn',
  templateUrl: './newborn.component.html',
  styleUrls: ['./newborn.component.css']
})
export class NewbornComponent implements OnInit{

  isCollapse:boolean = true

  currentUser:string=""
  //get all additems
  addnewbornitems:any=[]

  constructor(private api:ApiService){}

ngOnInit(): void {
  this.currentUser=localStorage.getItem("currentUsername")|| ''
  this.api.getAllNewbornAddItems()
  .subscribe((result)=>{
    console.log(result);
    this.addnewbornitems = result
    
  })
}

collapse(){
  this.isCollapse = !this.isCollapse
}

}
