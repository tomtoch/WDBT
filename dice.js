document.getElementById("dice").onclick = function() { diceFunction() };
function diceFunction() {
             var x = Math.floor((Math.random() * 6) + 1);
             var dicenumber = document.getElementById("dice");

        if(x == 1) {
            dicenumber.innerHTML = "<img src=images/1.png>"; }
        if(x == 2) {
            dicenumber.innerHTML = "<img src=images/2.png>"; }
        if(x == 3) {
            dicenumber.innerHTML = "<img src=images/3.png>"; }
        if(x == 4) {
            dicenumber.innerHTML = "<img src=images/4.png>"; }
        if(x == 5) {
            dicenumber.innerHTML = "<img src=images/5.png>"; }
        if(x == 6) {
            dicenumber.innerHTML = "<img src=images/6.png>"; }
    }

