import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonybookingComponent } from './ceremonybooking.component';

describe('CeremonybookingComponent', () => {
  let component: CeremonybookingComponent;
  let fixture: ComponentFixture<CeremonybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonybookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
