import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-newborn',
  templateUrl: './view-newborn.component.html',
  styleUrls: ['./view-newborn.component.css']
})
export class ViewNewbornComponent implements OnInit{

  itemId:string=''

  constructor(private viewnewbornActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.viewnewbornActivatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.itemId=data.id
        
      }
    )
  }

}
