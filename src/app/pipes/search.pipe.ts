import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // bday items
    transform(allbdayitems:any[],searchKey:string,propName:string): any[] {
    const result:any=[]
    if(!allbdayitems || searchKey=='' || propName==''){
      return allbdayitems
    }
    allbdayitems.forEach((item:any)=>{
    if( item[propName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
      result.push(item)
    }
    })
    return result;
  }


  


}
