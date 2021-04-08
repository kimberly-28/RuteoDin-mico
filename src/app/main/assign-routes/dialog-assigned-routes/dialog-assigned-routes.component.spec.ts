import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAssignedRoutesComponent } from './dialog-assigned-routes.component';

describe('DialogAssignedRoutesComponent', () => {
  let component: DialogAssignedRoutesComponent;
  let fixture: ComponentFixture<DialogAssignedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAssignedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAssignedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
