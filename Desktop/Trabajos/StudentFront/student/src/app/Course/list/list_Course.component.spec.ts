import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List_CourseComponent } from './list_Course.component';

describe('List_CourseComponent', () => {
  let component: List_CourseComponent;
  let fixture: ComponentFixture<List_CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List_CourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List_CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
