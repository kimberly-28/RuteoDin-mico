import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailsSalesComponent } from './dialog-details-sales.component';

describe('DialogDetailsSalesComponent', () => {
  let component: DialogDetailsSalesComponent;
  let fixture: ComponentFixture<DialogDetailsSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailsSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
