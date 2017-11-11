console.log("Hi")

var cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var cardSuit = ["diamonds", "spades", "clubs", "hearts"];

var Card = function(){
	this.suit = document.createElement('img');
	this.number = document.createElement('div');
	this.cardContDiv = document.createElement('div');
	this.init = function(){
		var flipDiv = document.createElement('div'),
	frontDiv = document.createElement('div'),
	backDiv = document.createElement('div'),
	catDiv = document.createElement('div');
	this.suit.src = "Images/hearts.svg";

this.cardContDiv.className = 'card_container';
flipDiv.className = 'flip';
frontDiv.className = 'card_front';
backDiv.className = 'card_back';
catDiv.className = 'card_category';

catDiv.appendChild(this.number);
catDiv.appendChild(this.suit);
frontDiv.appendChild(catDiv);
flipDiv.appendChild(frontDiv);
flipDiv.appendChild(backDiv);
this.cardContDiv.appendChild(flipDiv);
		this.cardContDiv.onclick = function(e){
			console.log(e.currentTarget);
			e.currentTarget.classList.toggle("flip_card");
//			setTimeout(function(e){
//				e.currentTarget.classList.remove("flip_card");
//			}, 650)
		}
		
		this.cardContDiv.draggable = true;
		this.cardContDiv.id = this.id;
		this.cardContDiv.ondragstart = function(e) {
			e.dataTransfer.setData("text", e.target.id);
		}

var cardDeck = document.getElementById("cardDeck")

cardDeck.appendChild(this.cardContDiv);
	}
}

for (var i = cardNumbers.length - 1; i >= 0; i--) {

	for(var j = cardSuit.length - 1; j >= 0; j--){
		var CardDeck = new Card();
		CardDeck.init();
		CardDeck.number.innerHTML = cardNumbers[i];
		CardDeck.suit.src = "Images/" + cardSuit[j] + ".svg";
		CardDeck.cardContDiv.id = cardSuit[j] + cardNumbers[i];
	}
}

var dropArea = document.getElementById("discardPile");
dropArea.addEventListener("drop", function(e){
	e.preventDefault();
	var data = e.dataTransfer.getData("text");
	var cardDragging = document.getElementById(data);
	cardDragging.classList.add("discard");
    e.target.appendChild(cardDragging);
})
dropArea.addEventListener("dragover", function(e){
	e.preventDefault();
});

var shuffleButton = document.getElementById('shuffle');
shuffleButton.addEventListener("click", function(e){shuffle()})

function shuffle(array) {
	var cardDeck = document.getElementById("cardDeck");
	var array = cardDeck.childNodes;
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
  	}
	for (var i = array.length - 1; i >= 0; i--) {
		cardDeck.appendChild(array[i]);
	}
}

//var CardDeck = new Card();
//CardDeck.init();
//
//var CardDeck2 = new Card();
//CardDeck2.init();
//CardDeck2.suit.src="Images/spades.svg"
//
//var CardDeck3 = new Card();
//CardDeck3.init();
//CardDeck3.suit.src="Images/diamonds.svg"
//
//var CardDeck4 = new Card();
//CardDeck4.init();
//CardDeck4.suit.src="Images/clubs.svg"
