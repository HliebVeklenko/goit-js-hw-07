const inputArea = document.getElementById('name-input');
const outputArea = document.getElementById('name-output');

inputArea.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        outputArea.textContent = event.target.value.trim();
    } else {
        outputArea.textContent = 'Anonymous';
    }
});