const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myBook = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');
    const listText = document.createElement('text');

    listItem.appendChild(listText);
    listText.textContent = myBook;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    })

    input.focus();
})