import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornItemsComponent } from './newborn-items.component';

describe('NewbornItemsComponent', () => {
  let component: NewbornItemsComponent;
  let fixture: ComponentFixture<NewbornItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbornItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
