var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var h1 = document.querySelector("h1");

//Add class to h1 tag
h1.classList.add("coolTitle");

function inputLength() {
  return input.value.length;
}

//Add div containing a list item and aremove button
function createListElement() {
    var div = document.createElement("div");
    div.classList.add("itemRow");
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.classList.add("remove");
    button.appendChild(document.createTextNode("Remove"));
    li.appendChild(document.createTextNode(input.value));
    div.append(li, button);
    ul.appendChild(div);
    input.value = "";
}

//Creates list item and button after mouse click
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

//Create list item and button after press of return key
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
}

//Delete item when remove button is clicked
function deleteItem(item) {
    if(item.target.className === "remove") {
        item.target.parentElement.remove();
    }
}

//Toggle strikethrough (done class) when item is clicked
function taskComplete(item) {
    if (item.target.tagName === "LI")
        item.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", taskComplete);

ul.addEventListener("click", deleteItem);