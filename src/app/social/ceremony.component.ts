import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.css']
})
export class CeremonyComponent implements OnInit{

  isCollapse:boolean = true

  currentUser:string=""
  //get all additems
   addceremonyitems:any=[]

   constructor(private api:ApiService){}

ngOnInit(): void {
  this.currentUser=localStorage.getItem("currentUsername")|| ''
  this.api.getAllCeremonyAddItems()
  .subscribe((result)=>{
    console.log(result);
    this.addceremonyitems = result
    
  })
}

collapse(){
  this.isCollapse = !this.isCollapse
}


}
