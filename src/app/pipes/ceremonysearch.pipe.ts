import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ceremonysearch'
})
export class CeremonysearchPipe implements PipeTransform {

  transform(allceremonyitems:any[],searchKey:string,propertyName:string): any[] {
    const result:any=[]
    if(!allceremonyitems || searchKey=='' || propertyName==''){
      return allceremonyitems
    }
    allceremonyitems.forEach((item:any)=>{
      if(item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
