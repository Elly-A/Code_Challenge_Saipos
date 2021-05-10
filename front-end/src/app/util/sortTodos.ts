import { Todo } from '../interfaces/todo.interface';
import { IAppState } from '../stores/store';

export function sortTodos(todos: IAppState['todoState']['todos']): Todo[] {
  return Object.values(todos).sort((todo1, todo2) => {
    if (!todo1.isPinned && todo2.isPinned) {
      return 1;
    } else if (todo1.isPinned && !todo2.isPinned) {
      return -1;
    } else {
      return parseInt(todo2.id, 10) - parseInt(todo1.id, 10);
    }
  });
}
