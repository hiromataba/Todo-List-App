import './style.css';

const list = document.querySelector('.list');
const form = document.getElementById('form');
const arr = JSON.parse(localStorage.getItem('List')) || [];

window.addEventListener('load', () => {
  const arr = JSON.parse(localStorage.getItem('List')) || [];
  arr.forEach((task) => {
    list.innerHTML += `<li class="item">
                            <div class="check">
                                <input type="checkbox" name="checkbox" id= ${task.index}>
                                <label class="text" for= ${task.index}> ${task.name}<labe> 
                            </div>
                          <i class="uil uil-trash-alt" job="delete"></i>
                       </li>`;
  });
});

form.addEventListener('submit', () => {
  const input = document.querySelector('#addlist');

  const toDo = input.value;
  if (toDo) {
    arr.push({
      name: toDo,
      completed: true,
      index: new Date(),
    });

    localStorage.setItem('List', JSON.stringify(arr));
  }
  input.value = '';
});
