ss=0;
function my_game(){
  let randomColor = ['red','green','yellow','skyblue','black','blue','pink','orange','brown','purple']
    let final_color=Math.floor(Math.random() * randomColor.length);
    let c=document.getElementById('container')
    f=randomColor[final_color]
    c.style.backgroundColor=randomColor[final_color]
}
my_game(); 
function get_go(){
    m=document.getElementById("inpp").value
    ss=document.getElementById("scr").innerText
    console.log(ss)
    console.log(m)
    console.log(f)
    if(m.toLowerCase()==f){
        ss=parseInt(ss)+1
        document.getElementById("scr").innerText=ss
    }
    my_game();
    m=''
    document.getElementById('inpp').value=m
}
let tt=document.getElementById('t30').innerText
console.log(tt)
function red_time(){
    if(tt!=0){
        tt=parseInt(tt)-1
        document.getElementById('t30').innerText=tt
    }
    if(tt==0){
        document.getElementById('inpp').disabled=true;
        window.open("index1.html", "_self");
        clearInterval(ddtt);
        sessionStorage.setItem("ss", ss);
    }
}
ddtt=setInterval(red_time,1000);
