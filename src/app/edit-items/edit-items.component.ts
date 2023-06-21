import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  itemId:string=''
constructor(private editBdayActivatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.editBdayActivatedRoute.params
  .subscribe((data:any)=>{
    this.itemId = data.id
    console.log(this.itemId);
    
  })
}

}
