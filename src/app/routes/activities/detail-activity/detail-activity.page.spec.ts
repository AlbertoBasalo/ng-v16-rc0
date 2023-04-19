import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActivityPage } from './detail-activity.page';

describe('DetailActivityPage', () => {
  let component: DetailActivityPage;
  let fixture: ComponentFixture<DetailActivityPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailActivityPage]
    });
    fixture = TestBed.createComponent(DetailActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
