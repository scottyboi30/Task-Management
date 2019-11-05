import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { TasksService } from './tasks.service';
import { StateService } from '../core/services/state.service';
import { TaskItemComponent } from './task-item/task-item.component';
import { MockComponent } from 'ng-mocks';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let mockTasksService, mockStateService;
  const tasks = [
    { id: '1', title: 'Test', description: 'test', state: 1 },
    { id: '2', title: 'Test', description: 'test', state: 2 },]

  beforeEach(async(() => {
    mockTasksService = jasmine.createSpyObj(['getTasksByState']);
    mockStateService = jasmine.createSpyObj(['getStateOptions', 'getAllStatesBit']);
   
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: TasksService, useValue: mockTasksService },
        { provide: StateService, useValue: mockStateService },
      ],
      declarations: [
        TasksComponent,
        MockComponent(TaskItemComponent),
      ]
    })
      .compileComponents();

    mockTasksService.getTasksByState.and.returnValue(of(tasks));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Sets the task property', () => {
    expect(component.tasks).toEqual(tasks);
  });

  it('Displays the correct number of tasks', () => {
    const foundTasks: DebugElement[] = 
      fixture.debugElement.queryAll(By.directive(TaskItemComponent));
        
    expect(foundTasks.length).toEqual(tasks.length);
  });
});
