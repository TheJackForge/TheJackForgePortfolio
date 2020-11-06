const button = document.querySelector('.add')
const input = document.getElementById('inputField')
const container = document.querySelector('.container');
const clear = document.querySelector('.clear');
const list = document.querySelector('.list-ul')
const items = JSON.parse(localStorage.getItem('items')) || [];




button.addEventListener('click', addItems)
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        addItems();
    }
})


// Function to add items to list and to items array

function addItems() {
    const inputValue = input.value;
    const item = {
        inputValue: inputValue,
        complete: false
    }



    if (inputValue !== '') {
    let li = document.createElement('div');
    
   list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-1 bg-primary rounded text-light checked"><div class="col-sm my-auto checked item-field">${inputValue}</></div><div class="col-sm checked">

    <button class="btn btn-primary btn delete rounded float-right checked">Remove</button>

    <button class="btn btn-primary btn edit rounded float-right checked">Edit</button>
    
    <button class="btn btn-primary btn complete rounded float-right checked">Complete</button>

    </div></div>`

    input.value = '';   


        // Push inputValue (item) to items array
        items.push(item);
        // Push inputValue (item) to local Storage
        localStorage.setItem('items', JSON.stringify(items));
}  
}


    // Remove Button on Created Item - Removes li in app and in localStorage
    list.addEventListener('click', function (e) {
        for (let i=0; i<items.length; i++) {
        if ((e.target.classList.contains('delete') && e.target.parentElement.previousElementSibling.textContent) === items[i].inputValue) {
            console.log('ITEM REMOVED FROM LOCAL STORAGE')
            e.target.parentElement.parentElement.remove();
            items.splice([i], 1)
            // Set Updated localStorage
            localStorage.setItem('items', JSON.stringify(items));
        }
    } 
})


function contains(e) {
    for (let i=0; i<items.length; i++)

    if ((e.target.parentElement.previousElementSibling.textContent === items[i].inputValue) && (e.target.classList.contains('complete'))) {
     items[i].complete = true;
     e.target.parentElement.previousElementSibling.classList.add('bg-secondary', 'text-muted')
     e.target.parentElement.classList.add('bg-secondary', 'text-muted')
     e.target.parentElement.classList.add('bg-secondary', 'text-muted')
     e.target.previousElementSibling.classList.add('bg-secondary', 'text-muted')
     e.target.classList.add('bg-secondary', 'text-muted')
     e.target.previousElementSibling.previousElementSibling.classList.add('bg-secondary', 'text-muted')
     e.target.parentElement.parentElement.classList.remove('bg-primary');
     e.target.parentElement.parentElement.classList.add('bg-secondary', 'text-muted')
     localStorage.setItem('items', JSON.stringify(items));
    }
}

// Edit Button to Create Edit Button in Item

list.addEventListener('click', function (e) {
    const editField = e.target.parentElement.previousElementSibling;
    for (let i=0; i<items.length; i++) {
    if (editField.textContent === items[i].inputValue && (e.target.classList.contains('edit'))) {
        
        editField.textContent = '';
        editField.innerHTML += `<input type="text" id="edit" value="${items[i].inputValue}"></input> <button class="btn btn-primary btn-sm rounded save-button">Save</button>`
        const saveBtn = document.querySelector('.save-button');
        const editInput = document.getElementById('edit');
        saveBtn.addEventListener('click', function() {
            console.log('TEST');
            items[i].inputValue = editInput.value
            editField.textContent = editInput.value;
            localStorage.setItem('items', JSON.stringify(items));
        })
    }
    }
})

// Button to Clear Items from list
let clearAll = document.querySelector('.clear')

clearAll.addEventListener('click', function () {
    list.innerHTML = '';
    localStorage.clear();
    items.splice(0, items.length);
})


window.addEventListener('DOMContentLoaded', function () {
    for (let i=0; i<items.length; i++) {
    if (items[i].complete === false) {
    let li = document.createElement('div');
    list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-1 bg-primary rounded text-light"><div class="col-sm my-auto">${items[i].inputValue}</></div><div class="col-sm">

    <button class="btn btn-primary btn delete rounded  float-right">Remove</button>

    <button class="btn btn-primary btn edit rounded float-right ">Edit</button>
    
    <button class="btn btn-primary btn complete rounded  float-right">Complete</button>

    </div></div>`
    } else {
    let li = document.createElement('div');
    list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-1 bg-secondary rounded text-muted"><div class="col-sm my-auto">${items[i].inputValue}</></div><div class="col-sm">

    <button class="btn btn-secondary btn delete rounded float-right text-muted">Remove</button>

    <button class="btn btn-secondary btn edit rounded float-right text-muted">Edit</button>
    
    <button class="btn btn-secondary btn complete rounded float-right text-muted">Complete</button>

    </div></div>`
    }
    }


    list.addEventListener('click', contains);
    

    })



   
    








