/* eslint-disable import/prefer-default-export */
export const update = () => {
  const checkbox = document.querySelectorAll('.check-box');

  const checkBoxArr = Array.from(checkbox);
  checkBoxArr.forEach((checktodo) => {
    checktodo.addEventListener('click', (e) => {
      const parent = e.target.parentElement;
      const label = parent.children[1];

      const todos = JSON.parse(localStorage.getItem('List'));

      const index = todos.findIndex((item) => item.index.toString() === e.target.id);
      if (e.target.checked) {
        todos[index].completed = true;
        localStorage.setItem('List', JSON.stringify(todos));
        label.style.textDecoration = 'line-through';
      } else {
        todos[index].completed = false;
        localStorage.setItem('List', JSON.stringify(todos));
        label.style.textDecoration = 'none';
      }
    });
  });
};
