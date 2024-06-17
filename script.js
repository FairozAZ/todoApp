// Add a 'checked' symbol when clicking on a list item
const mainContainer = document.querySelector('.container');
mainContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        e.target.classList.toggle('checked');
    }
});

// Click on a delete button to hide the current list item
const deleteBtn = document.getElementsByClassName('dlt-elm');
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function() {
        let answer = prompt(`Want to delete this? Type 'yes'.`);
        if (answer == 'yes') {
            const parentDiv = this.parentElement;
            parentDiv.style.display = 'none';
        } else {
            alert(`Type 'yes' to delete this`);
        }
    }
};

// Create a new list item when clicking on the "Add" button
const addBtn = document.querySelector('.submit');
addBtn.addEventListener('click', () => {
    // getting input value
    const inputField = document.querySelector('#txtField').value;
    
    // creating new div
    const createDiv = document.createElement('DIV');
    createDiv.className = 'sub-cont';

    // creating new item and including it in div
    const createItem = document.createElement('P');
    const itemTxt = document.createTextNode(inputField);
    createItem.appendChild(itemTxt);
    createDiv.appendChild(createItem);

    // creating new delete btn and including it in div
    const deleteItem = document.createElement('BUTTON');
    deleteItem.className = 'dlt-elm';
    const btnTxt = document.createTextNode('Delete');
    deleteItem.appendChild(btnTxt);
    createDiv.appendChild(deleteItem);

    // checking the field, if empty then alert 
    // if user input value then create new div
    if (inputField == '') {
        alert('You must write something!');
    } else {
        document.querySelector('.container').appendChild(createDiv);
    }
    // clear after user input
    document.querySelector('#txtField').value = '';

    // deleting new item after clicking the new delete btn
    const newBtn = document.getElementsByClassName('dlt-elm');
    for (let i = 0; i < newBtn.length; i++) {
        newBtn[i].onclick = function() {
            let newAnswer = prompt(`Want to delete this? Type 'yes'.`);
            if (newAnswer == 'yes') {
                const newDiv = this.parentElement;
                newDiv.style.display = 'none';
            } else {
                alert(`Type 'yes' to delete this`);
            }
        }
    };
});