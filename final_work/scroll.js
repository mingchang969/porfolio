let header=document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>2){
        header.style="border-bottom:dashed 2px rgb(179, 135, 15)";
    }
    else{
        header.style="";
    }
});