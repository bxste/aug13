import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDataComponent } from './single-data.component';

describe('SingleDataComponent', () => {
  let component: SingleDataComponent;
  let fixture: ComponentFixture<SingleDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleDataComponent]
    });
    fixture = TestBed.createComponent(SingleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
