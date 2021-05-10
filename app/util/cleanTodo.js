
module.exports = (todo) => {
  return {
    ...todo,
    isCompleted: todo.isCompleted === 1 ? true : false,
    isPinned: todo.isPinned === 1 ? true : false,
  }
}