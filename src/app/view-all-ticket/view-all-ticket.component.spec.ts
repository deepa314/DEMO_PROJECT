import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTicketComponent } from './view-all-ticket.component';

describe('ViewAllTicketComponent', () => {
  let component: ViewAllTicketComponent;
  let fixture: ComponentFixture<ViewAllTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
