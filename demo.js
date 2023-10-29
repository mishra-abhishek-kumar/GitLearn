const headertTitle = document.getElementById('header-title');
headertTitle.innerText = 'Item Lists'

const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';

let title = document.getElementsByClassName('title');
title[0].style.fontWeight = 'bold';

let items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';

for(var i=0; i<items.length; i++) {
    items[i].style.fontWeight = 'bold';
}

let itemsByTag = document.getElementsByTagName('li');
itemsByTag[4].style.backgroundColor = 'red';
itemsByTag[2].style.display = 'none';

var listItems = document.querySelector('.list-group-item:nth-child(2)');
listItems.style.backgroundColor = 'green';

