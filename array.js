var fruits = [];

function debug() {
	console.log(fruits);
}

function keyPressOnNewFruit() {
	if ( event.keyCode == 13 ) {
		addFruit();
	}
}

function addFruit() {
	fruits.push(document.getElementById('newFruit').value);
	document.getElementById('newFruit').value = '';
	showFruitList();
	debug();
}

function removeFruit(position) {
	fruits.splice(position, 1);
	showFruitList();
}

function showFruitList() {
	var fruitList = document.getElementById('fruitList');
	fruitList.innerHTML = '';
	for (var i = 0; i < fruits.length; i++) {
		fruitList.innerHTML += '<li onclick="removeFruit('+i+');">'+fruits[i]+'</li>';
	}
}

document.getElementById('addFruitBtn').addEventListener('click', addFruit);
document.getElementById('newFruit').addEventListener('keypress', keyPressOnNewFruit);
