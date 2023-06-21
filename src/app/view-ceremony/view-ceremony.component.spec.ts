import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCeremonyComponent } from './view-ceremony.component';

describe('ViewCeremonyComponent', () => {
  let component: ViewCeremonyComponent;
  let fixture: ComponentFixture<ViewCeremonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCeremonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
