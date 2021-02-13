import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PcButtonComponent } from './pc-button.component';

describe('PcButtonComponent', () => {
  let component: PcButtonComponent;
  let fixture: ComponentFixture<PcButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
