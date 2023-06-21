import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewbornComponent } from './view-newborn.component';

describe('ViewNewbornComponent', () => {
  let component: ViewNewbornComponent;
  let fixture: ComponentFixture<ViewNewbornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewbornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewbornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
