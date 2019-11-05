import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { StateService } from '../../core/services/state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnDestroy {

  task: Task;
  taskForm: FormGroup;
  stateOptions: any[] = [];
  submitted = false;
  private destroyed$ = new Subject();

  constructor(private formBuilder: FormBuilder,
    private service: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(({ id }) => {
        if (id) {
          return this.service.getTask(id);
        }
        return of({ title: '', description: '', state: 1 });
      }),
      takeUntil(this.destroyed$)
    ).subscribe((task: Task) => {
      this.task = task;
      this.setUpForm();
    });
  }

  saveTask(): void {
    this.submitted = true;
    if (this.taskForm.invalid) return;
    this.service.saveTask({ id: this.task.id, ...this.taskForm.value })
      .subscribe(() => this.router.navigateByUrl('/tasks'));
  }

  private setUpForm(): void {
    this.stateOptions = this.stateService.getStateOptions();
    this.taskForm = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      description: [this.task.description],
      state: [this.task.state, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
