import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-bday',
  templateUrl: './view-bday.component.html',
  styleUrls: ['./view-bday.component.css']
})
export class ViewBdayComponent implements OnInit{

   itemId:string=''
   item:any={}

constructor(private viewActivateRoute:ActivatedRoute,private api:ApiService){}

ngOnInit(): void {
  //to get path parameter from url
  this.viewActivateRoute.params
  .subscribe((data:any)=>{
    this.itemId = data.id
    console.log(this.itemId);
    //  console.log(data.id);
    // this.itemId = data['id']
    this.api.viewItem(this.itemId)
    .subscribe((result:any)=>{
     console.log(result);
      this.item = result
      this.itemId = result.id
    })
    
  })
  // to get details of particular contact
 
 }

}
