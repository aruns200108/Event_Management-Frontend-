import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyItemsComponent } from './ceremony-items.component';

describe('CeremonyItemsComponent', () => {
  let component: CeremonyItemsComponent;
  let fixture: ComponentFixture<CeremonyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
