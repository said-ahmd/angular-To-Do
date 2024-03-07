import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDeletedListComponent } from './to-do-deleted-list.component';

describe('ToDoDeletedListComponent', () => {
  let component: ToDoDeletedListComponent;
  let fixture: ComponentFixture<ToDoDeletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDeletedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoDeletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
