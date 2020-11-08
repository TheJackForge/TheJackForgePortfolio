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
    
    
    for (let i=0; i<items.length; i++) {
        if ( items[i].inputValue === inputValue ) {
            alert('Item already exists');
            input.value = ''
            return;
        }
    }
    if (inputValue !== '') {
        
    let li = document.createElement('div');
    
   list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-2 bg-primary rounded text-light"><div class="col-sm my-auto item-field">${inputValue}</></div><div class="col-sm button-field">

    <button class="btn btn-primary btn-sm delete rounded  float-right">Remove</button>

    <button class="btn btn-primary btn-sm edit rounded float-right ">Edit</button>
    
    <button class="btn btn-primary btn-sm complete rounded  float-right">Complete</button>

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

        if (e.target.classList.contains('complete')) {
            const itemDiv = e.target.parentElement.previousElementSibling;
            itemDiv.classList.add('COMPLETE')
            const completeNode = e.target.parentElement.previousElementSibling;
            if (completeNode.textContent === items[i].inputValue) {
                items[i].complete = true;

            const completeButton = e.target;
            const editButton = e.target.previousElementSibling;
            const removeButton = e.target.previousElementSibling.previousElementSibling;
            const rowDiv = e.target.parentElement.parentElement

            console.log(completeNode.textContent);
            console.log(items[i].inputValue)
            completeButton.classList.toggle('btn-primary') 
            completeButton.classList.toggle('text-muted')   
            editButton.classList.toggle('btn-primary')
            editButton.classList.toggle('text-muted')  
            removeButton.classList.toggle('btn-primary')
            removeButton.classList.toggle('text-muted') 
            rowDiv.classList.toggle('bg-primary')
            rowDiv.classList.toggle('text-muted')
            rowDiv.classList.toggle('text-light')
            
            completeNode.classList.remove('COMPLETE')
            if (removeButton.classList.contains('btn-primary')) {
                items[i].complete = false;
            }
            localStorage.setItem('items', JSON.stringify(items));

            }      

            
        } 
    }

list.addEventListener('click', contains);


// Edit Button to Create Edit Button in Item

list.addEventListener('click', function (e) {
    // const editField = e.target.parentElement.previousElementSibling;
    for (let i=0; i<items.length; i++) {
    // if (editField.textContent === items[i].inputValue && 
        
     if (e.target.classList.contains('edit')) { 
        // Adds ACTIVENODE class to the Input Node
        e.target.parentElement.previousElementSibling.classList.add('ACTIVENODE')
        const activeNode = list.querySelector('.ACTIVENODE');
            if (activeNode.textContent === items[i].inputValue) {

        // const activeNode = document.querySelector('.ACTIVENODE');
        console.log(activeNode)
        activeNode.textContent = '';
        activeNode.innerHTML += `<input type="text" id="edit" value="${items[i].inputValue}"></input><button class="btn btn-primary btn-sm rounded save-button">Save</button>`
        const saveBtn = document.querySelector('.save-button');
        const editInput = document.getElementById('edit');
        saveBtn.addEventListener('click', function() {
            console.log('TEST');
            items[i].inputValue = editInput.value
            activeNode.textContent = editInput.value;
            // Removes ACTIVENODE class from the Input Node
            activeNode.classList.remove('ACTIVENODE')
            localStorage.setItem('items', JSON.stringify(items));
        })
    }
    }
}})

// Button to Clear Items from list
let clearAll = document.querySelector('.clear')

clearAll.addEventListener('click', function () {
    if (confirm("Are you sure you want to delete your Task List?")) {
    list.innerHTML = '';
    localStorage.clear();
    items.splice(0, items.length);
    } 
})

// End of Clear Items Code




// Start of Reload Code with localStorage (2 parameters linked to items[i].complete === true or false)

window.addEventListener('DOMContentLoaded', function () {
    for (let i=0; i<items.length; i++) {
    if (items[i].complete === false) {
    let li = document.createElement('div');
    list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-2 bg-primary rounded text-light"><div class="col-sm my-auto item-field">${items[i].inputValue}</></div><div class="col-sm button-field">

    <button class="btn btn-primary btn-sm delete rounded float-right">Remove</button>

    <button class="btn btn-primary btn-sm edit rounded float-right ">Edit</button>
    
    <button class="btn btn-primary btn-sm complete rounded float-right">Complete</button>

    </div></div>`
    } else {
    let li = document.createElement('div');
    list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-2 bg-secondary rounded text-muted"><div class="col-sm my-auto item-field">${items[i].inputValue}</></div><div class="col-sm button-field">

    <button class="btn btn-sm delete rounded float-right text-muted">Remove</button>

    <button class="btn btn-sm edit rounded float-right text-muted">Edit</button>
    
    <button class="btn btn-sm complete rounded float-right text-muted">Complete</button>

    </div></div>`
    }
    }

    list.addEventListener('click', contains);
   
    })

    // End of Reload Code




   
    








