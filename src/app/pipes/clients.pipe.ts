import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clients'
})
export class ClientsPipe implements PipeTransform {

  transform(allclients:any[],searchKey:string,propertyName:string): any[] {
    const result:any=[]
    //transformed output
    if(!allclients || searchKey=="" || propertyName==""){
      return allclients
    }
    allclients.forEach((item:any)=>{
      if (item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
