import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRoutesComponent } from './assign-routes.component';

describe('AssignRoutesComponent', () => {
  let component: AssignRoutesComponent;
  let fixture: ComponentFixture<AssignRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
