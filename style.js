let form = document.getElementById('addForm');
let listItems = document.getElementById('items');
let search = document.getElementById('filter');

form.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);
search.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    //taking value of the input fiels
    let val = document.getElementById('item').value;
    //creating li element 
    let li = document.createElement('li');
    //adding className to li element
    li.className = 'list-group-item';
    //appending the value of the input to the li tag
    li.appendChild(document.createTextNode(val));

    //create del btn
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    //appending delBtn to li
    li.appendChild(delBtn);

    //appending entire li tag to the ul
    listItems.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are yous sure!')) {
            let li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
}

function filterItems(e) {
    //getting search value and making it lowercase
    let val = e.target.value.toLowerCase();

    //getting all the li's available
    let items = listItems.getElementsByTagName('li');
    //converting the above HTML collection to array 
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(val) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}