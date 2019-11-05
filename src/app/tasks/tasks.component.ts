import { Component, OnInit } from '@angular/core';
import { listAnimation } from './tasks.animation';
import { TasksService } from './tasks.service';
import { Task } from '../shared/interfaces/task';
import { StateService } from '../core/services/state.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [listAnimation]
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  stateFilter: number;
  stateOptions: any[] = [];

  constructor(private service: TasksService,
    private stateService: StateService) { }

  ngOnInit() {
    this.stateOptions = this.stateService.getStateOptions();
    this.stateFilter = this.stateService.getAllStatesBit();
    this.service.getTasksByState(this.stateFilter).subscribe(tasks => this.tasks = tasks);
  }
}
