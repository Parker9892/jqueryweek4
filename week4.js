var game = document.querySelector('h1')
var win = document.querySelector('#win')
var lose = document.querySelector('#lose')
var score = document.querySelector('#score')

var adder = {
    firstPic: document.querySelector('#one'),
    secondPic: document.querySelector('#two'),
    thirdPic: document.querySelector('#three'),
    fourthPic: document.querySelector('#four'),
}

adder.firstPic = Math.floor(Math.random() * 12) + 1
adder.secondPic = Math.floor(Math.random() * 12) + 1
adder.thirdPic = Math.floor(Math.random() * 12) + 1
adder.fourthPic = Math.floor(Math.random() * 12) + 1

game.innerHTML = Math.floor(Math.random() * 102) + 19; 
var scoreHtmlValue = score.innerHTML;
var restart = false







// $('img').click(function(){
//     adder.firstPic = Math.floor(Math.random() * 12) + 1
//     adder.secondPic = Math.floor(Math.random() * 12) + 1
//     adder.thirdPic = Math.floor(Math.random() * 12) + 1
//     adder.fourthPic = Math.floor(Math.random() * 12) + 1
//     console.log($(this).val())
    
// })


$('#one').click(function () {
    adder.firstPic = Math.floor(Math.random() * 12) + 1
    // console.log($(this).val())
    var intValue = parseInt(scoreHtmlValue) || 0;
    intValue += parseInt(adder.firstPic);
    scoreHtmlValue = intValue;
    score.innerHTML = scoreHtmlValue
    count()

    // function yo () {
    //     score.innerHTML = 0
    //     score = adder.firstPic
    // }
    
})



$('#two').click(function () {
    adder.firstPic = Math.floor(Math.random() * 12) + 1
    // console.log($(this).val())
    var intValue = parseInt(scoreHtmlValue) || 0;
    intValue += parseInt(adder.secondPic);
    scoreHtmlValue = intValue;
    score.innerHTML = scoreHtmlValue
    count()
})

$('#three').click(function () {
    adder.firstPic = Math.floor(Math.random() * 12) + 1
    // console.log($(this).val())
    var intValue = parseInt(scoreHtmlValue) || 0;
    intValue += parseInt(adder.thirdPic);
    scoreHtmlValue = intValue;
    score.innerHTML = scoreHtmlValue
    count()
})

$('#four').click(function () {
    adder.firstPic = Math.floor(Math.random() * 12) + 1
    // console.log($(this).val())
    var intValue = parseInt(scoreHtmlValue) || 0;
    intValue += parseInt(adder.fourthPic);
     scoreHtmlValue = intValue;
    score.innerHTML = scoreHtmlValue
    count()
})

function count(){
    console.log('here');
    var s = 1
    
if(scoreHtmlValue > game.innerHTML){
 loseInner = parseInt(lose.innerHTML) || 0;
 loseInner = parseInt(s);
 lose.innerHTML = loseInner;
 console.log('loser')
 


 
}else if (scoreHtmlValue === game.innerHTML) {
  
   winInner = parseInt(win.innerHTML) || 0;
   winInner = parseInt(s);
   win.innerHTML = winInner;
}
}

