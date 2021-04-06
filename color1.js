// second part

var score = sessionStorage.getItem("ss");

function restart(){
  open("index.html","_self");
}
let fs=document.getElementById("yscore")
fs.innerText=score;
