const linkText = document.querySelector('#linkText')

linkText.addEventListener('click', () => {
    const changeText = prompt('Измените текст ссылки');
    linkText.textContent = changeText;
})

document.querySelector('#linkText').addEventListener('click', 
    (event) => {
      event.preventDefault();
    })