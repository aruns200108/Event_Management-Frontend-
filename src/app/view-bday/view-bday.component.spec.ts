import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBdayComponent } from './view-bday.component';

describe('ViewBdayComponent', () => {
  let component: ViewBdayComponent;
  let fixture: ComponentFixture<ViewBdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
