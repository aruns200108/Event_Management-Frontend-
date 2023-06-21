import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: any = []
  clients: any = []
  clientss: any = []
  searchkey: string = ""
  //  counter: number = 0
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllBdayDetails()
      .subscribe((result) => {
        console.log(result);
        this.client = result
      })

    // ngAfterViewInit();{
    //   this.counter += this.client.length;
    //   this.counter += this.clients.length;
    // }

    // newborn
    this.api.getAllNewbornDetails()
      .subscribe((result) => {
        console.log(result);
        this.clients = result
      })

    // ceremony
    this.api.getAllCeremonyDetails()
      .subscribe((result) => {
        console.log(result);
        this.clientss = result
      })
  }


  //generate pdf
  generatePDF() {
    //1. create an object for jspdf 
    var pdf = new jspdf()

    //2.setup title row for the table
    let tHead = ['Name', 'Number', 'Event Date', 'Place', 'Address', 'Event', 'Package']
    let tBody = []

    //setup pdf properties
    pdf.setFontSize(16)
    pdf.text('Pending Works', 15, 10)
    pdf.setFontSize(12)
    pdf.setTextColor(99)

    //to display as table needed to convert arary of object to nested array
    for (let item of this.client) {
      let temp = [item.username, item.mobile, item.doe, item.place, item.address, item.event, item.packag]
      tBody.push(temp)
    }
    for (let item of this.clients) {
      let temp = [item.username, item.mobile, item.doe, item.place, item.address, item.event, item.packag]
      tBody.push(temp)
    }
    for (let item of this.clientss) {
      let temp = [item.username, item.mobile, item.doe, item.place, item.address, item.event, item.packag]
      tBody.push(temp)
    }
    //5.coevert nested array to table using autotable
    (pdf as any).autoTable(tHead, tBody, { startY: 15 })
    //6.to open pdf in another tab
    pdf.output('dataurlnewwindow')
    //7. to download or save pdf
    pdf.save('clients.pdf')
  }


// deletecli(id:any){
// this.api.deleteClient(id).subscribe({
// next:(res)=>{alert('deleted')},
// error:console.log,

// })
// }




}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

