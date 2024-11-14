const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})


const alertFunction = document.querySelector('#alertFunction');

alertFunction.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})