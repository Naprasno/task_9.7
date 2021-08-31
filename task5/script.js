const input = document.querySelector('input');
const duplicateField = document.getElementById('duplicateField');

input.addEventListener('keyup', logKey);
function logKey(e) {
   duplicateField.textContent = input.value;
};

