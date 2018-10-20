import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamyFormComponent } from './lamy-form.component';

describe('LamyFormComponent', () => {
  let component: LamyFormComponent;
  let fixture: ComponentFixture<LamyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
