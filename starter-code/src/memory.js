var MemoryGame = function (cards) {
  this.cards = this.shuffleCard(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  // this.finished;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for (var i = cardsArr.length-1; i > 0; i--){
    var j =  Math.floor(Math.random()*(i + 1))
    var temp = cardsArr[i]
    cardsArr[i] = cardsArr[j]
    cardsArr[j] = temp;
  }
  return cardsArr
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if ( firstCard == secondCard){
    this.pairsGuessed++
    return true;
  }
  else
    return false
}

MemoryGame.prototype.finished = function () {
  if ( this.pairsGuessed == cards.length/2){
    console.log('true')
    return true;
  }
  else
    console.log('false')
    return false;
};
