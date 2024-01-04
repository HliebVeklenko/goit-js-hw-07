function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

function usedBtn() {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  btn.parentNode.style.backgroundColor = randomColor;
}

btn.addEventListener('click', usedBtn);