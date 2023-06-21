import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdaybookingComponent } from './bdaybooking.component';

describe('BdaybookingComponent', () => {
  let component: BdaybookingComponent;
  let fixture: ComponentFixture<BdaybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdaybookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdaybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
