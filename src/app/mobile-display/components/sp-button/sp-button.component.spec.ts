import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpButtonComponent } from './sp-button.component';

describe('SpButtonComponent', () => {
  let component: SpButtonComponent;
  let fixture: ComponentFixture<SpButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
