import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAgentComponent } from './dashboard-agent.component';

describe('DashboardAgentComponent', () => {
  let component: DashboardAgentComponent;
  let fixture: ComponentFixture<DashboardAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
