import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricGroup01Component } from './metric-group01.component';

describe('MetricGroup01Component', () => {
  let component: MetricGroup01Component;
  let fixture: ComponentFixture<MetricGroup01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricGroup01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricGroup01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
