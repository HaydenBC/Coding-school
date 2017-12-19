var quotes = [
    'ur mom gay',
    'ur dad gay',
    'ur gay',
]
function newFortune() {
var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}