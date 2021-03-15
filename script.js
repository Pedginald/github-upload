var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var h1 = document.querySelector("h1");

h1.classList.add("coolTitle");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	div.classList.add("itemRow");
	var li = document.createElement("li");
	var button = document.createElement("button");
	ul.appendChild(div);
	div.append(li, button);
	button.appendChild(document.createTextNode("Remove"));
	li.appendChild(document.createTextNode(input.value));
	button.classList.add("remove");
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItem(item) {
	if(item.target.className === "remove") {
		item.target.parentElement.remove();
	}
};

function taskComplete(item) {
	if (item.target.tagName === "LI")
	item.target.classList.toggle("done");
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", taskComplete);

ul.addEventListener("click", deleteItem);