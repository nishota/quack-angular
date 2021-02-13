import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpTrendComponent } from './sp-trend.component';

describe('SpTrendComponent', () => {
  let component: SpTrendComponent;
  let fixture: ComponentFixture<SpTrendComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
