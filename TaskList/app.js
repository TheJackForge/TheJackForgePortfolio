const button = document.querySelector('.add')
const input = document.getElementById('inputField')
const list = document.querySelector('.list-ul')


button.addEventListener('click', function () {
    let inputValue = input.value;
    if (inputValue !== '') {
    let li = document.createElement('div');
    
    list.appendChild(li);
    li.innerHTML += `
    <div class="row mb-1 bg-primary rounded text-light"><div class="col-sm my-auto">${inputValue}</></div><div class="col-sm">

    <button class="btn btn-primary btn delete rounded  float-right">Remove</button>

    <button class="btn btn-primary btn edit rounded float-right ">Edit</button>
    
    <button class="btn btn-primary btn complete rounded  float-right">Complete</button>

    </div></div>`
    input.value = '';
}  else {
   alert('Please enter an item')
}

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
})

list.addEventListener('click', function (e) {

    if (e.target.classList.contains('complete')) {
        const nodes = e.target.parentElement.getElementsByTagName('button');
        for (let i=0; i<nodes.length; i++) {
        nodes[i].classList.remove('bg-primary', 'text-light')
        nodes[i].classList.add('bg-secondary', 'text-muted');
        }
        const buttonDiv = e.target.parentElement;

        const getRow = e.target.parentElement.parentElement;
        buttonDiv.classList.remove('bg-primary')
        getRow.classList.remove('bg-primary', 'text-light');

        buttonDiv.classList.add('bg-secondary');
        getRow.classList.add('bg-secondary', 'text-muted');
    }
    
})

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit')) {
        e.target.parentElement.previousElementSibling.innerHTML = `<input type="text" class="edit-field"><button class="btn btn-primary text-light edit-button">Edit</button>`;
    } 

    if (e.target.classList.contains('edit-button')) {
        const editField = document.querySelector('.edit-field');
        e.target.parentElement.innerHTML = `${editField.value}`
    }

    
    })

})








