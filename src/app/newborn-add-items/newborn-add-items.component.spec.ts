import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornAddItemsComponent } from './newborn-add-items.component';

describe('NewbornAddItemsComponent', () => {
  let component: NewbornAddItemsComponent;
  let fixture: ComponentFixture<NewbornAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbornAddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
