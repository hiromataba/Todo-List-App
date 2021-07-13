import './style.css';

const list = document.querySelector('.list');

function displayLists(toDo) {
  const text = `<li class="item">
                       <i class="uil uil-square circle-icon" job="complete"></i>
                       <p class="text" > ${toDo}<p>
                       <i class="uil uil-trash-alt" job="delete"></i>
               </li>`;

  const position = 'beforeend';
  list.insertAdjacentHTML(position, text);
}
const arr = [];
let index = 0;

document.addEventListener('keyup', (event) => {
  const input = document.querySelector('#addlist');
  if (event.which === 13) {
    const toDo = input.value;
    if (toDo) {
      displayLists(toDo, true, index);
      arr.push({
        name: toDo,
        completed: true,
        index,
      });
      index += 1;
      localStorage.setItem('List', JSON.stringify(arr));
    }
    input.value = '';
  }
});
