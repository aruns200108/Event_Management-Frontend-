import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newbornsearch'
})
export class NewbornsearchPipe implements PipeTransform {

  transform(allnewbornitems:any[],searchKey:string,propertyName:string): any[] {
    //transformed output
    const result:any=[]
if(!allnewbornitems || searchKey=="" || propertyName==""){
  return allnewbornitems
}
allnewbornitems.forEach((item:any)=>{
 if (item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
  result.push(item)
 }
})
    return result;
  }

}
