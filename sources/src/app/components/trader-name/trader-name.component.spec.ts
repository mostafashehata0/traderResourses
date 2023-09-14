import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderNameComponent } from './trader-name.component';

describe('TraderNameComponent', () => {
  let component: TraderNameComponent;
  let fixture: ComponentFixture<TraderNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraderNameComponent]
    });
    fixture = TestBed.createComponent(TraderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
