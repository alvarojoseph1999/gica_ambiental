import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamjobComponent } from './teamjob.component';

describe('TeamjobComponent', () => {
  let component: TeamjobComponent;
  let fixture: ComponentFixture<TeamjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamjobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
