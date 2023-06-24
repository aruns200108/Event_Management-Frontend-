import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornComponent } from './newborn.component';

describe('NewbornComponent', () => {
  let component: NewbornComponent;
  let fixture: ComponentFixture<NewbornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
