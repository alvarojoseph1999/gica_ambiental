import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GicaDashboardComponent } from './gica-dashboard.component';

describe('GicaDashboardComponent', () => {
  let component: GicaDashboardComponent;
  let fixture: ComponentFixture<GicaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GicaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GicaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
