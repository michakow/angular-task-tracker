import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
