
document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. update the round score IF the rolled number NOT a 1
});
