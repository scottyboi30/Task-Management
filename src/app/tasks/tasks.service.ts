import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guid } from "guid-typescript";
import { take } from 'rxjs/operators';

import { Task } from 'src/app/shared/interfaces/task';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  saveTask(task: Task): Observable<any> {
    const taskId =
      !task.id ? Guid.create().toString() : task.id;

    return this.http.put(`${environment.baseUrl}/${taskId}`, task)
      .pipe(take(1));
  };

  getTasksByState(stateFilter: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.baseUrl}/state/${stateFilter}`)
      .pipe(take(1));
  }

  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${environment.baseUrl}/${id}`)
      .pipe(take(1));
  }
}
