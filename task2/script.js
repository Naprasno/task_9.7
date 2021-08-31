const consoleLog = document.querySelector('#consoleLog');
const alertText = document.querySelector('#alert');
const promptText = document.querySelector('#prompt');


consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
}
);

alertText.addEventListener('click', () => {
    alert('Отобразит модальное окно с текстом');
}
);

promptText.addEventListener('click', () => {
    alert('Отобразит модальное окно с текстом, полем для ввода текста');
}
);