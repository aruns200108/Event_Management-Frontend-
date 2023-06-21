import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornEditItemsComponent } from './newborn-edit-items.component';

describe('NewbornEditItemsComponent', () => {
  let component: NewbornEditItemsComponent;
  let fixture: ComponentFixture<NewbornEditItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbornEditItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornEditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
