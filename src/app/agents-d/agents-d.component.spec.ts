import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsDComponent } from './agents-d.component';

describe('AgentsDComponent', () => {
  let component: AgentsDComponent;
  let fixture: ComponentFixture<AgentsDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
