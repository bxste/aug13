import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelComponent } from './novel.component';

describe('NovelComponent', () => {
  let component: NovelComponent;
  let fixture: ComponentFixture<NovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovelComponent]
    });
    fixture = TestBed.createComponent(NovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
