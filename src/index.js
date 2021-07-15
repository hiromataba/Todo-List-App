/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import './style.css';
import { dragDrop } from './dragtask';
import { update } from './update';

export const list = document.querySelector('.list');
export const form = document.getElementById('form');
const clearAll = document.querySelector('#clear-all');
let arr = JSON.parse(localStorage.getItem('List')) || [];

  arr.forEach((task) => {
    list.innerHTML += `<li class="item" draggable="true">
                            <div class="check">
                                <input type="checkbox" class="check-box" name="checkbox" id= "${task.index}" ${task.completed ? 'checked' : ''}>
                                <label class="text ${task.completed}" for= ${task.index}> ${task.name}<labe> 
                            </div>
                            <i class="uil uil-ellipsis-v job="delete"></i>
                       </li>`;
  });

export const task = document.querySelectorAll('.item');

form.addEventListener('submit', () => {
  const input = document.querySelector('#addlist');

  const toDo = input.value;
  if (toDo) {
    arr.push({
      name: toDo,
      completed: false,
      index: new Date(),
    });

    localStorage.setItem('List', JSON.stringify(arr));
  }
  input.value = '';
});

clearAll.addEventListener('click', () => {
  localStorage.clear();
  list.innerHTML = '';
  arr = [];
});

window.addEventListener('load', () => {
  dragDrop();
  update();
});