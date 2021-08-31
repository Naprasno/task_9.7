const input = document.querySelector('input');
const duplicateField = document.getElementById('duplicateField');

input.addEventListener('keyup', logKey);
function logKey(e) {
   duplicateField.textContent = input.value;
};

const gg = document.querySelector('button');
gg.addEventListener('click', qwert);
function qwert(e) {
    console.log(input.value);
    input.value = "";
    duplicateField.textContent = "";
};

