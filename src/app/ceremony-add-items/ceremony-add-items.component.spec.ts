import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyAddItemsComponent } from './ceremony-add-items.component';

describe('CeremonyAddItemsComponent', () => {
  let component: CeremonyAddItemsComponent;
  let fixture: ComponentFixture<CeremonyAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyAddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonyAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
