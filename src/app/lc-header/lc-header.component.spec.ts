import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcHeaderComponent } from './lc-header.component';

describe('LcHeaderComponent', () => {
  let component: LcHeaderComponent;
  let fixture: ComponentFixture<LcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
