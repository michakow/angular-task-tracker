import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
  faInfoCircle = faInfoCircle;

  dateColor: string | undefined;
  dateText: string | undefined

  constructor() { }

  ngOnInit(): void {
    this.dateText = this.checkDeadline();
  }

  checkDeadline(): string {
    const taskDate = new Date(this.task.deadline);
    const date = new Date();
    const month = date.getMonth() < 9 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
    const day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    const today = date.getFullYear()+'-'+month+'-'+day;
    const daysToDeadLine = (taskDate.getTime() - date.getTime()) / (1000*3600*24)
    
    if(this.task.deadline === today) {
      this.dateColor = 'red';
      return 'Dzisiaj'
    };
    if(daysToDeadLine === 1) {
      this.dateColor = 'orange';
      return 'Jutro'
    };
    if(daysToDeadLine < 0 && this.task.done === false) {
      if(this.task.done) this.dateColor = 'rgb(175, 95, 95)'
      else this.dateColor = 'red';
      return `${this.task.deadline} (Po terminie)`
    };
    this.dateColor = 'unset';
    return this.task.deadline || 'brak terminu'
  }

  onToggleDone(task: Task): void {
    this.onToggleDoneTask.emit(task);
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

}
