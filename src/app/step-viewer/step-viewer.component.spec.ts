import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepViewerComponent } from './step-viewer.component';

describe('StepViewerComponent', () => {
  let component: StepViewerComponent;
  let fixture: ComponentFixture<StepViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
