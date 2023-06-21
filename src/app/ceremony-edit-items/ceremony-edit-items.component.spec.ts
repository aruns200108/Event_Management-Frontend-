import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyEditItemsComponent } from './ceremony-edit-items.component';

describe('CeremonyEditItemsComponent', () => {
  let component: CeremonyEditItemsComponent;
  let fixture: ComponentFixture<CeremonyEditItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyEditItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonyEditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
