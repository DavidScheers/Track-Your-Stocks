var button = document.getElementById("addDialog");
button.addEventListener("click", addDialog);

function addDialog() {
	var dialog = document.getElementById("addStock");
	dialog.showModal();
};

var cancel = document.getElementById("cancel");
cancel.addEventListener("click", closeDialog);

function closeDialog() {
	var dialog = document.getElementById("addStock");
	dialog.close();
};

var add = document.getElementById("add");
add.addEventListener("click", addCard);

function addCard() {
	var temp = document.querySelector("template");
	var main = document.querySelector("main");
	var card = document.createElement("div");
	card.className = "card";
	card.innerHTML = temp.innerHTML;
	card.querySelector(".title").innerHTML = document.querySelector("input").value;
	main.appendChild(card);
	closeDialog();
}

	


