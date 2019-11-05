import { Injectable } from '@angular/core';

import { State } from '../../shared/enums/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  getStateOptions() {
    let states: any[] = [];
    for (let value in State) {
      if (isNaN(Number(value))) {
        states.push({ name: value, value: State[value] })
      }
    }
    return states;
  }

  getAllStatesBit() {
    return State.ToDo | State.Started | State.Completed | State.Cancelled | State.Deleted;
  }
}