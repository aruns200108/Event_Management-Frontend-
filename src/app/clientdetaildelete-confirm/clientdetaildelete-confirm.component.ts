import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clientdetaildelete-confirm',
  templateUrl: './clientdetaildelete-confirm.component.html',
  styleUrls: ['./clientdetaildelete-confirm.component.css']
})

export class ClientdetaildeleteConfirmComponent {
 @Input() deleteMobile:any
}
