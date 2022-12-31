// let ks=document.querySelectorAll(".key");
// ks.forEach(function(k){
//     k.addEventListener("transitionend")
// })
window.addEventListener("keydown",function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let keypres=document.querySelector(`div[data-key="${e.keyCode}"`);
    keypres.addEventListener("transitionend",function(b){
        b.target.classList.remove('playing');
    })
    keypres.classList.add("playing");
    console.log(keypres.classList);
    console.log(audio);
    audio.currentTime=0;
    audio.play();
})