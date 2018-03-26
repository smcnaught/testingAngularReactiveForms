import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextButtonsComponent } from './next-buttons.component';

describe('NextButtonsComponent', () => {
  let component: NextButtonsComponent;
  let fixture: ComponentFixture<NextButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
