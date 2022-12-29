let count=0;
let val=document.querySelector("#value");
let btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let styles=e.currentTarget.classList;
        if(styles.contains("decrease")){
            count-=1;
        }
        if(styles.contains("increase")){
            count+=1;
        }
        if(styles.contains("reset")){
            count=0;
        }
        val.textContent=count;
        if(count>0){
            val.style.color="green";
        }
        if(count<0){
            val.style.color="red";
        }
        if(count===0){
            val.style.color="black";
        }
                
    })
        
})