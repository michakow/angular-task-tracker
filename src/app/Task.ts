export interface Task {
  id: number;
  name: string;
  deadline: string;
  completion?: string;
  done: boolean;
}