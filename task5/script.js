const inputField = document.querySelector('#inputField');
const duplicateField = document.querySelector('#duplicateField');
const submitButton = document.querySelector('#submitButton')

inputField.addEventListener('input', function() {
    duplicateField.textContent = inputField.value;
})

submitButton.addEventListener('click', function() {
    event.preventDefault();
    const inputValue = inputField.value;
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = "";
})