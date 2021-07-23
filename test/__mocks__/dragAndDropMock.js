function clearCompleted(item) {
  if (!item) throw new Error('please enter a valid name');
  const newArr = JSON.parse(localStorage.getItem('List')) || [];
  newArr.push(item);
  const filteredCompletedTask = newArr.filter(
    (item) => item.completed !== true,
  );
  localStorage.setItem('List', JSON.stringify(filteredCompletedTask));
}

const update = (completed, updateIndex) => {
  if (!completed) throw new Error('please enter a valid Status');
  if (completed) {
    updateIndex = true;
  }
  return updateIndex;
};

function editTask(task) {
  if (!task) throw new Error('please enter a valid task');
  const newArr = JSON.parse(localStorage.getItem('List')) || [];
  if (task) {
    localStorage.setItem('List', JSON.stringify(newArr));
  }
}

function dragDrop(status) {
  if (!status) throw new Error('please enter a valid name');
  const dragDropItem = true;
  if (dragDropItem) {
    status = true;
  }
}

export default {
  dragDrop,
  editTask,
  clearCompleted,
  update,
};
