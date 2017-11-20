import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcFooterComponent } from './lc-footer.component';

describe('LcFooterComponent', () => {
  let component: LcFooterComponent;
  let fixture: ComponentFixture<LcFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
