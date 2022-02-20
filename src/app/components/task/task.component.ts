import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleDoneTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faClipboard = faClipboard;
  faClipboardCheck = faClipboardCheck;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDone(task: Task) {
    this.onToggleDoneTask.emit(task);
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

}
