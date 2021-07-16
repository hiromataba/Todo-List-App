/* eslint-disable import/prefer-default-export */
import {
  clearAll,
  list,
  form,
  arr,
  ellipseNode,
  trash,
  editInput,
  editForm,
  editFormArr,
  editInputArr,
} from './index';
// import { update } from "./update";

const taskArr = document.querySelectorAll('.item');
const tasks = Array.from(taskArr);

export function clearCompleted() {
  clearAll.addEventListener('click', (e) => {
    const newArr = JSON.parse(localStorage.getItem('List')) || [];
    const filteredCompletedTask = newArr.filter(
      (item) => item.completed !== true
    );
    localStorage.setItem('List', JSON.stringify(filteredCompletedTask));
    location.reload();
  });
}

export function addTodo() {
  form.addEventListener('submit', () => {
    const input = document.querySelector('#addlist');

    const toDo = input.value;
    if (toDo) {
      arr.push({
        name: toDo,
        completed: false,
        index: arr.length,
      });

      localStorage.setItem('List', JSON.stringify(arr));
    }
    input.value = '';
  });
}

export function editTask() {
  editFormArr.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = form.querySelector('.text').value;
      const id = Number(form.querySelector('.text').id);
      arr.forEach((item) => {
        if (item.index === id) {
          item.name = value;
          localStorage.setItem('List', JSON.stringify(arr));
        }
      });
    });
  });
}

export function removeElement(){
  tasks.forEach((task) => {
    task.addEventListener('click', () => {
      console.log('Task')
    })
  })
}