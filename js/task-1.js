"use strict";

// task 1.1

const listItems = document.getElementsByClassName('item');
console.log("Number of categories:", listItems.length);

// task 1.2

const list = Array.from(listItems);

list.forEach(el => {
    console.log("Category: ", el.firstElementChild.textContent);
    console.log("Elements: ", el.lastElementChild.children.length);
});