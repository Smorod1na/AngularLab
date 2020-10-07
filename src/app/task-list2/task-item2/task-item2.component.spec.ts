/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskItem2Component } from './task-item2.component';

describe('TaskItem2Component', () => {
  let component: TaskItem2Component;
  let fixture: ComponentFixture<TaskItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
