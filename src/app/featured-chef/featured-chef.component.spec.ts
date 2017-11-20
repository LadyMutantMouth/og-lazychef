import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedChefComponent } from './featured-chef.component';

describe('FeaturedChefComponent', () => {
  let component: FeaturedChefComponent;
  let fixture: ComponentFixture<FeaturedChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
