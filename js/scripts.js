//Custom Sign Shop JavaScript
var charCount = 0;

function countChar(str) {
  var lng = str.length;
  document.getElementById("charCount").innerHTML = lng;
  charCount = lng;
}

function calc() {
  var total = charCount * 5; //CharCount isn't a delcared variable and the function doesn't return anything
  var dollars = "Your Custom Sign will cost: $";
  document.getElementById("dollars").innerHTML = dollars + total;
}
