const firstColEl= document.querySelector(`.first`);
const nextSiblingEl= document.querySelector(`.first`).nextSibling; //gets the value of the first child element of 'first

const parentRowContainer = document.querySelector('.columns')
//const nextSiblingEl2= parentRowContainer.children; //returns an array containing the child elements
//const nextSiblingEl2= parentRowContainer.lastElementChild.previousElementSibling; //While targetting the 'second' class we still return 'first'

//let testh1= document.createElement('h1')
//testh1.innerText="Hello World"

//parentRowContainer.children[1].insertBefore(testh1,null); //we insert the testh1 object into the second child of parentRowContainer

const g = t =>document.createElement(t); //creates elements, with t being a stand-in for the HTML tag we want to use

const divCol = g('div')
divCol.className = "col-md-1 text-light bg-danger p-5"
divCol.innerText="divCol1"
const divCol2 = g('div')
divCol2.className = "col-md-1 text-light bg-dark p-5"
divCol2.innerText="divCol2"
parentRowContainer.insertBefore(divCol, parentRowContainer.lastElementChild); //we insert a red collumn in between first and second. The second argument also dictates the position of the new element we create

// parentRowContainer.insertAdjacentElement('afterbegin', divCol2)
// parentRowContainer.insertAdjacentElement('afterend', divCol2)
// parentRowContainer.insertAdjacentElement('beforebegin', divCol2)
// parentRowContainer.insertAdjacentElement('beforeend', divCol2)

//append method
parentRowContainer.append(divCol)
parentRowContainer.append(divCol2)