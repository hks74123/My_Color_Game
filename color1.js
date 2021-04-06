// second part

var score = sessionStorage.getItem("ss");

function restart(){
  open("color_game.html","_self");
}
let fs=document.getElementById("yscore")
fs.innerText=score;