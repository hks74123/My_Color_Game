// second part

var score = sessionStorage.getItem("ss");

function restart(){
  open("https://gamstd74.github.io/My_Color_Game/","_self");
}
let fs=document.getElementById("yscore")
fs.innerText=score;
