function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divMain = document.querySelector('#controls');
const inputBox = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');


function createBoxes(amount) {
  let j = 30;
  const elements = [];
  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = `${j}px`;
    box.style.height = `${j}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    j += 10;
  }
  divBoxes.append(...elements);
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}

btnDestroy.addEventListener('click', destroyBoxes);

btnCreate.addEventListener('click', () => {
  if(inputBox.value >= 1 && inputBox.value <= 100){
      destroyBoxes();
    const amount = inputBox.value;
    createBoxes(amount);
  }
});