const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const col=document.querySelector(".color");
btn.addEventListener("click",function(){
    let rand=Math.floor(Math.random()*4);
    console.log(rand);
    document.body.style.backgroundColor=colors[rand];
    col.textContent=colors[rand];
})
