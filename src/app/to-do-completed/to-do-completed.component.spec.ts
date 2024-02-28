import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCompletedComponent } from './to-do-completed.component';

describe('ToDoCompletedComponent', () => {
  let component: ToDoCompletedComponent;
  let fixture: ComponentFixture<ToDoCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
