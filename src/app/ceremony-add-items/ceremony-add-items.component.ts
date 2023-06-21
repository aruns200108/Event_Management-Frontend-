import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ceremony-add-items',
  templateUrl: './ceremony-add-items.component.html',
  styleUrls: ['./ceremony-add-items.component.css']
})
export class CeremonyAddItemsComponent {

  ceremonyStatus:boolean=false

ceremonyForm=this.fb.group({
  id:['',[Validators.required,Validators.pattern('[0-9]*')]],
  theme:['',[Validators.required]],
  image:['',[Validators.required]],
  budget:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
constructor(private fb:FormBuilder,private api:ApiService,private ceremonyRouter:Router){}
//ceremonyaddItem()
ceremonyAdd(){
  let id = this.ceremonyForm.value.id
  let theme = this.ceremonyForm.value.theme
  let image = this.ceremonyForm.value.image
  let budget = this.ceremonyForm.value.budget

 if(this.ceremonyForm.valid){
 //call additem of api service
 this.api.ceremonyAdd(id,theme,image,budget)
 .subscribe((result:any)=>{
  alert(result.message);

  this.ceremonyStatus = true
        setTimeout(()=>{
          this.ceremonyRouter.navigateByUrl('/social-items')

 },3000);
},
 (result:any)=>{
  alert(result.error.message)
  this.ceremonyForm.reset()
 }
 )
 }
 else{
  alert('Invalid Form')
 }
} 
}
