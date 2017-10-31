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
	fruits.push($('#newFruit').val());
	$('#newFruit').val('');
	showFruitList();
	debug();
}

function removeFruit(position) {
	fruits.splice(position, 1);
	showFruitList();
}

function showFruitList() {
	
	$('#fruitList').html('');
	for (var i = 0; i < fruits.length; i++) {
		$('#fruitList').append('<li onclick="removeFruit('+i+');">'+fruits[i]+'</li>');
	}
}

$('#addFruitBtn').click(addFruit);
$('#newFruit').keypress(keyPressOnNewFruit);
