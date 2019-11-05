import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TaskItemComponent } from './task-item.component';
import { MockPipe } from 'ng-mocks';
import { StateStringPipe } from 'src/app/shared/pipes/state-string.pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        TaskItemComponent,
        MockPipe(StateStringPipe, (...args) => JSON.stringify(args)),]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
  });

  describe('When there is no task description', () => {
    beforeEach(() => {
      component.task = 
        { id: '1', title: 'Test', description: '', state: 1 };
      fixture.detectChanges();
    });

    it('Does not render a p tag', () => {
      const p: DebugElement = fixture.debugElement.query(By.css('p'));
      expect(p).toBeFalsy();
    });
  });

  describe('When there is a task description', () => {
    beforeEach(() => {
      component.task = 
        { id: '1', title: 'Test', description: 'Test', state: 1 };
      fixture.detectChanges();
    });

    it('Renders a p tag', () => {
      const p: DebugElement = fixture.debugElement.query(By.css('p'));
      expect(p).toBeTruthy();
    });

    it('Renders a link to edit the task', () => {
      const link: DebugElement = fixture.debugElement.query(By.css('a'));
      const linkValue = link.nativeElement.getAttribute('href');
      
      expect(linkValue).toContain('edit');
      expect(linkValue).toContain(component.task.id);
    });
  });
});
