import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityItemComponent } from './activity-item.component';

describe('ActivityItemComponent', () => {
  let component: ActivityItemComponent;
  let fixture: ComponentFixture<ActivityItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActivityItemComponent]
    });
    fixture = TestBed.createComponent(ActivityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
