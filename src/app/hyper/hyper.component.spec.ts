import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperComponent } from './hyper.component';

describe('HyperComponent', () => {
  let component: HyperComponent;
  let fixture: ComponentFixture<HyperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HyperComponent]
    });
    fixture = TestBed.createComponent(HyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
