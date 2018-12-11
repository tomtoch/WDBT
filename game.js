function Game(gameID){
    this.playerA = null;
    this.playerB = null;
    this.gameID = gameID;
    this.gameState = "0 JOINT";
    this.playerq = null;


};

Game.prototype.hastwoplayers = function (g) {
    //console.log("-->"+g.playerA);
    if (g.playerA == null){
        return false;
    }
    if(g.playerB == null){
        return false;
    }
    return true;
}

Game.prototype.addplayer = function (str){

console.assert(str instanceof Object, "%s:expecting object here not a %s",arguments.callee.name , typeof p);
    if (this.playerA == null){
        this.playerA = str;
        this.playerq = "A"
        
    }else{
       if (this.playerB == null) {
            this.playerB = str;
            this.playerq = "B"
        }else{
              console.log("[LOG]-- two players already added")}
    }

}

Game.prototype.setState = function(w){
    this.gameState = w;
    console.log("Gamestate updated to %s", w);

}



module.exports= Game;