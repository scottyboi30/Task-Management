import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { StateService } from 'src/app/core/services/state.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let mockTasksService, mockRouter, mockStateService;
  const task = { id: '1', title: 'Test', description: 'test', state: 1 };

  const setup = (id = null) => {
    mockTasksService = jasmine.createSpyObj(['saveTask', 'getTask']);
    mockRouter = jasmine.createSpyObj(['navigateByUrl']);
    mockStateService = jasmine.createSpyObj(['getStateOptions'])
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        { provide: TasksService, useValue: mockTasksService },
        { provide: Router, useValue: mockRouter },
        { provide: StateService, useValue: mockStateService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id }),
          },
        }],
      declarations: [TaskFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    mockTasksService.getTask.and.returnValue(of(task));
    mockTasksService.saveTask.and.returnValue(of({}));

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  describe('When there is a task id', () => {
    beforeEach(() => {
      setup(task.id);
    });

    it('Makes a call to get a task', () => {
      expect(mockTasksService.getTask).toHaveBeenCalled();
    });

    it('Sets the task property', () => {
      expect(component.task).toEqual(task);
    });

    it('Creates the form with the correct values', () => {
      const values = component.taskForm.value;
      expect(values.title).toEqual(task.title);
      expect(values.description).toEqual(task.description);
      expect(values.state).toEqual(task.state);
    });

    describe('And the form is valid when it is saved', () => {
      beforeEach(() => {
        component.saveTask();
      });

      it('Makes a call to save the task', () => {
        expect(mockTasksService.saveTask).toHaveBeenCalledWith(task);
      });

      it('Redirects to the tasks page', () => {
        expect(mockRouter.navigateByUrl)
          .toHaveBeenCalledWith('/tasks');
      });
    });

    describe('And the form is invalid when it is saved', () => {
      beforeEach(() => {
        component.taskForm.controls['title'].setValue('');
        component.saveTask();
      });

      it('Does not Make a call to save the task', () => {
        expect(mockTasksService.saveTask).toHaveBeenCalledTimes(0);
      });

      it('Adds an error class to the input control', () => {
        fixture.detectChanges();
        const input: DebugElement = fixture.debugElement.query(By.css('#title'));
        expect(input.nativeElement.classList).toContain('is-invalid');
      });
    });
  });

  describe('When there is no task id', () => {
    beforeEach(() => {
      setup();
    });

    it('Does not makes a call to get a task', () => {
      expect(mockTasksService.getTask).toHaveBeenCalledTimes(0);
    });

    it('Sets the task property', () => {
      expect(component.task).toEqual(jasmine.objectContaining(
        {
          title: '',
          description: '',
          state: 1
        }));
    });
  });
});
