import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  //get all additems
  addBdayitems:any=[]
  searchKey:string=''
  item:any=[]
  bdayitem:any

  constructor(private api:ApiService,private allItemsRouter:Router){}

  ngOnInit(): void {
    this.api.getAllAdditems()
    .subscribe((result:any)=>{
      console.log(result);
      this.addBdayitems = result
    })
  }

  //deleteItem
  deleteItem(itemId:any){
    this.api.deleteItem(itemId)
    .subscribe((data:any)=>{
    // this.allItemsRouter.navigateByUrl('all-items')
    window.location.reload()
    })
  }
}
