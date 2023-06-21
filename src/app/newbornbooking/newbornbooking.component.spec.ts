import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornbookingComponent } from './newbornbooking.component';

describe('NewbornbookingComponent', () => {
  let component: NewbornbookingComponent;
  let fixture: ComponentFixture<NewbornbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbornbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
