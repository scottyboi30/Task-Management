import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { environment } from '../../environments/environment';
import { TasksService } from './tasks.service';
import { Task } from '../shared/interfaces/task';

describe('TasksService Tests', () => {

  let service: TasksService;
  let httpMock: HttpTestingController;

  let tasks: Task[] = [
    { id: '1', title: 'Test one', description: 'Test', state: 1 },
    { id: '2', title: 'Test two', description: 'Test', state: 2 },
    { id: '3', title: 'Test three', description: 'Test', state: 4 },
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksService]
    });

    service = TestBed.get(TasksService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should GET tasks by state', () => {
    const filter = 31;
    service.getTasksByState(filter)
      .subscribe((data: Task[]) => {
        expect(data.length).toBe(tasks.length);
      });

    let tasksRequest: TestRequest = httpMock
      .expectOne(`${environment.baseUrl}/state/${filter}`);

    expect(tasksRequest.request.method).toEqual('GET');

    tasksRequest.flush(tasks);
  });

  it('should GET a task by id', () => {
    const task = tasks[0];
    service.getTask(task.id)
      .subscribe((data: Task) => {
        expect(data).toBe(task);
      });

    let tasksRequest: TestRequest = httpMock
      .expectOne(`${environment.baseUrl}/${task.id}`);

    expect(tasksRequest.request.method).toEqual('GET');

    tasksRequest.flush(task);
  });

  it('should PUT a task', () => {
    const task = tasks[0];
    service.saveTask(task)
      .subscribe((data: Task) => {
        expect(data).toBe(task);
      });

    let tasksRequest: TestRequest = httpMock
      .expectOne(`${environment.baseUrl}/${task.id}`);

    expect(tasksRequest.request.method).toEqual('PUT');
    tasksRequest.flush(task);
  });
});
