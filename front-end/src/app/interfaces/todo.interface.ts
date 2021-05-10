
export interface Todo {
  id?: string;
  createdByName: string;
  createdByEmail: string;
  content: string;
  timesCompleted: number;
  timesEdited: number;
  isCompleted: boolean;
  isPinned: boolean;
}
