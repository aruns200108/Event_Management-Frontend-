import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newborn-add-items',
  templateUrl: './newborn-add-items.component.html',
  styleUrls: ['./newborn-add-items.component.css']
})
export class NewbornAddItemsComponent {

  // //additem status
   newbornStatus:boolean= false

newbornAddItem = this.fb.group({
  id:['',[Validators.required,Validators.pattern('[0-9]*')]],
  theme:['',[Validators.required]],
  image:['',[Validators.required]],
  budget:['',[Validators.required,Validators.pattern('[0-9]*')]]
  // place:['',[Validators.required]]
})
  constructor(private fb:FormBuilder,private api:ApiService,private newbornadditemRouter:Router){}

  //newbornAdd()
  newbornAdd(){
    
    let id = this.newbornAddItem.value.id
    let theme = this.newbornAddItem.value.theme
    let image = this.newbornAddItem.value.image
    let budget = this.newbornAddItem.value.budget
    // let place = this.newbornAddItem.value.place
    // 
    if(this.newbornAddItem.valid){
      //call newbornadditem of apiservice
      this.api.newbornAdd(id,theme,image,budget)
      .subscribe((result:any)=>{
        alert(result.message);
        this.newbornStatus = true
        setTimeout(()=>{
          this.newbornadditemRouter.navigateByUrl('/corporate-items')

        },3000);
      },
      (result:any)=>{
        alert(result.error.message)
        this.newbornAddItem.reset()
      }
      )
    }
    else{
      alert('Invalid Form')
    }
  }

}
