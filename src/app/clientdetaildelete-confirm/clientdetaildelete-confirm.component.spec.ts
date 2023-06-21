import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetaildeleteConfirmComponent } from './clientdetaildelete-confirm.component';

describe('ClientdetaildeleteConfirmComponent', () => {
  let component: ClientdetaildeleteConfirmComponent;
  let fixture: ComponentFixture<ClientdetaildeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdetaildeleteConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientdetaildeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
