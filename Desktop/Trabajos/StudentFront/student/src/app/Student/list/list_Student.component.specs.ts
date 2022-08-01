import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List_StudentComponent } from './list_Student.component';

describe('List_StudentComponent', () => {
  let component: List_StudentComponent;
  let fixture: ComponentFixture<ListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List_StudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List_StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
