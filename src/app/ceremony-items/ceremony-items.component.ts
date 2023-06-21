import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ceremony-items',
  templateUrl: './ceremony-items.component.html',
  styleUrls: ['./ceremony-items.component.css']
})
export class CeremonyItemsComponent implements OnInit{

  addceremonyitem:any=[]
  searchKey:string=""
  constructor(private api:ApiService){}

ngOnInit(): void {
  this.api.getAllCeremonyAddItems().subscribe
  ((result)=>{
    console.log(result);
    this.addceremonyitem=result
  })
}

}
