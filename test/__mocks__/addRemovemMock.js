function Todo(name, id) {
  (this.name = name), (this.id = id), (this.completed = false);
}

function addTodo(name) {
  if (!name) throw new Error('please enter a valid name');
  const arr = localStorage.getItem('List') || [];
  const todo = new Todo(name, arr.length + 1);
  arr.push(todo);
  localStorage.setItem('List', JSON.stringify(arr));
  
}

function removeElement(taskId) {
  if (!taskId) throw new Error('please enter a valid name');
  const newArr = JSON.parse(localStorage.getItem('List')) || [];
  const newArrFiltered = newArr.filter((task) => task.id !== taskId);
  localStorage.setItem('List', JSON.stringify(newArrFiltered));

}

export default { addTodo, removeElement };
