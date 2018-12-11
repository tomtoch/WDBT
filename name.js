//var stat = require("./stattrekker");


function functioneel(){
    var naam;
    var persoon = prompt("Please enter your (nick)name:", "Tom");
    if(persoon ==null){
        naam = "naamloos";
    }else{
        naam = persoon;
    }
    document.getElementById("player1").innerHTML = naam;
    document.getElementById("p1").style.display = "none";
}
// document.getElementById("ragequits").innerHTML = "Ragequits: "+stat.ragequits;


function disablenamechange(){
        
        
}