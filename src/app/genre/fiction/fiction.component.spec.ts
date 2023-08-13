import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionComponent } from './fiction.component';

describe('FictionComponent', () => {
  let component: FictionComponent;
  let fixture: ComponentFixture<FictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FictionComponent]
    });
    fixture = TestBed.createComponent(FictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
