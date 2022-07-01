let addButton = document.getElementById('add-todo');
let toDoContainer = document.getElementById("to-do-container");
let inputField = document.getElementById("input-field");
let xButton = document.getElementsByTagName('span');
let listItems = document.querySelectorAll('li');
let element = document.getElementById('paragraph');

function inputLength () {
  return inputField.value.length;
}

function listLength () {
  return listItems.length;
}


function addElement () {
  var paragraph = document.createElement('li');
  var pText = document.createElement('p');
   
  paragraph.innerText = inputField.value;
  //adding a css element to the p tag
  paragraph.id = 'paragraph';
  
if (inputField.value === '') {
  alert("I feel so empty! Please fill me with stuff to do.")
}  else {
  toDoContainer.appendChild(paragraph);
}   //clears text field
 inputField.value = "";

 //close button  
let closeButton = document.createElement('span');
closeButton.appendChild(document.createTextNode('X')); 
paragraph.appendChild(closeButton);
closeButton.addEventListener('click', deleteListItem); 
  
function deleteListItem () {
  paragraph.remove();
} 

//done button  
var doneButton = document.createElement('button');
  //doneButton.appendChild(document.createTextNode('Check'));
  doneButton.setAttribute("type", "radio");
  doneButton.setAttribute("name", "radioList")
  paragraph.appendChild(doneButton);
  doneButton.id = 'done-button';
  
  
 function crossOut (event, element) {
    if (event.target != element) {
       event.stopPropagation();
    }
   doneButton.classList.toggle('done');
}
  
doneButton.addEventListener('click', crossOut);  
  
//color array on click
 const colors = ["#fbfcfc", " #f5b7b1", "#f9e79f", "rgb(175, 225, 175)"];
  
 //starting index
 index = 0;
  
for (let i = 0; i <= colors.length; i++) {
  paragraph.addEventListener('click', function onClick () {
    paragraph.style.backgroundColor = colors[index];
    
     index = index >= colors.length - 1 ? 0 : index + 1;
  })
}  
}

//call to create element
addButton.addEventListener('click', addElement);

inputField.addEventListener('keypress', keyPress);

//Keypress conditions
function keyPress (event) {
  if (inputLength() > 0 && event.which === 13) {
    addElement();
  } 
}