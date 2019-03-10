import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTimeoutComponent } from './message-timeout.component';

describe('MessageTimeoutComponent', () => {
  let component: MessageTimeoutComponent;
  let fixture: ComponentFixture<MessageTimeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTimeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
