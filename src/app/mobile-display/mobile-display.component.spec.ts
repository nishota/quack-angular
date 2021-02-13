import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileDisplayComponent } from './mobile-display.component';

describe('MobileDisplayComponent', () => {
  let component: MobileDisplayComponent;
  let fixture: ComponentFixture<MobileDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
