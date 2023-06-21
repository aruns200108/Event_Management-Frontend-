import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-newborn-items',
  templateUrl: './newborn-items.component.html',
  styleUrls: ['./newborn-items.component.css']
})
export class NewbornItemsComponent implements OnInit{

  addnewbornitems:any=[]
  searchKey:string=""
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllNewbornAddItems()
    .subscribe((result)=>{
      console.log(result);
      this.addnewbornitems = result
    })
  }

}
