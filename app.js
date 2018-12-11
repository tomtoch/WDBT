var express = require("express");
var http = require("http");
var WebSocket = require("ws");

var messages = require("./public/javascripts/messages");
var stattrekker = require("./public/javascripts/stattrekker")
var Game = require("./public/javascripts/game");

var port = process.argv[2];
var app = express();
var amount = 1;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



var server = http.createServer(app);

const wss = new WebSocket.Server({ server });

var websockets = {};

var currentgame = new Game(stattrekker.gamesPlayed++);
var connectionID= 0;





console.log("Deez nuts")
//gaat niet
wss.on("connection", function connection(ws){
  console.log("dieser Noten");
  var con = ws;
});


// rerouting to gamestart.html
app.get("/", function(req, res) {
  res.sendFile("gamestart.html", {root: "./public"});
});
// wss.on("connection", function connection(ws){
//  console.log("[LOG] Client "+amount + " connected to server!");
//  amount++;

// let con = ws;
// con.id = connectionID++;
// websockets[con.id] = currentgame;


// currentgame.addplayer(con);
// console.log("[LOG]-- player %s (as player %s) placed in game %s", amount - 1, currentgame.playerq, currentgame.gameID);


// if(currentgame.hastwoplayers(currentgame)){
//   currentgame = new Game(stattrekker.gamesPlayed++);
// }

// });


var socket = new WebSocket("ws://localhost:3000");
socket.onopen = function(){
    console.log("test");
}


server.listen(port);



