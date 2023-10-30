// const headertTitle = document.getElementById('header-title');
// headertTitle.innerText = 'Item Lists'

// const header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px black';

// let title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold';

// let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// for(var i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }

// let itemsByTag = document.getElementsByTagName('li');
// itemsByTag[4].style.backgroundColor = 'red';
// itemsByTag[2].style.display = 'none';

// var listItems = document.querySelector('.list-group-item:nth-child(2)');
// listItems.style.backgroundColor = 'green';

//Traversing DOM

var itemList = document.querySelector('#items');
//ParentNode
itemList.parentNode.style.backgroundColor = 'gray';
//ParentElement
itemList.parentElement.parentElement.style.backgroundColor = 'green';

//ChildNodes
console.log(itemList.childNodes);
//children
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild);
//firstElementchild
itemList.firstElementChild.textContent = 'Hello';

//lastChild
console.log(itemList.lastChild);
//lastElementchild
itemList.lastElementChild.textContent = 'Hola';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
itemList.previousElementSibling.style.color = 'red';

//Adding Element inside the DOM
var createDiv = document.createElement('div');
createDiv.className = 'newDiv';
createDiv.id = 'div1';
//adding attribute to the element
createDiv.setAttribute('title', 'Hello new div');
//creating text node
var divText = document.createTextNode('Hello World');
createDiv.appendChild(divText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

createDiv.style.fontSize = '30px';
container.insertBefore(createDiv, h1);



//Adding Hello World before item1;
var newDiv = document.createElement('div');

//creating text node
var text = document.createTextNode("HELLO WORLD");
newDiv.appendChild(text);

var item = document.querySelector('div .list-group');
var li = document.querySelector('div li');
newDiv.style.fontSize = '25px';
newDiv.style.color = 'white';
item.insertBefore(newDiv, li);