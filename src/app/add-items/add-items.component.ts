import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {

  //addItemStatus
  addItemStatus :boolean = false
  bdayitem:any=[]
additemForm=this.fb.group({
  id:['',[Validators.required,Validators.pattern('[0-9]*')]],
  theme:['',[Validators.required]],
  image:['',[Validators.required]],
  //dessert:['',[Validators.required]],
  //cake:['',[Validators.required]],
  budget:['',[Validators.required,Validators.pattern('[0-9]*')]]

})

constructor(private fb:FormBuilder,private api:ApiService,private addItemRouter:Router){}

addItem(){
 
  let id = this.additemForm.value.id
  let theme = this.additemForm.value.theme
  let image = this.additemForm.value.image
  // let dessert = this.additemForm.value.dessert
  // letcake = this.additemForm.value.cake
  let budget = this.additemForm.value.budget
  
  if(this.additemForm.valid){
  //call addItem of apiService    <!--dessert,cake-->
  this.api.addItem(id,theme,image,budget)
  //200 response
  .subscribe((result:any)=>{
    alert(result.message);
    //redirect to all-tems page
    this.addItemStatus = true
    setTimeout(()=>{
      this.addItemRouter.navigateByUrl('/all-items')
    },5000);
    
  
  },
  //400 response
  (result:any)=>{
    alert(result.error.message)
    //reset the value of input field
    this.additemForm.reset()
  }
  )
  }
  else{
    alert('invalid Form')
  }
  
}


}
