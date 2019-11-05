import { Pipe, PipeTransform } from '@angular/core';

import { State } from '../../shared/enums/state';

@Pipe({ name: 'stateString' })
export class StateStringPipe implements PipeTransform {
  transform(state: string): string {
    return State[+state];
  }
}