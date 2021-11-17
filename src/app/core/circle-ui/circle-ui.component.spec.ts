import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleUIComponent } from './circle-ui.component';

describe('CircleUIComponent', () => {
  let component: CircleUIComponent;
  let fixture: ComponentFixture<CircleUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
