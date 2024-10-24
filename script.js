console.log("web");
let yesBtn=document.querySelector("#yes");
yesBtn.addEventListener("mouseover", function(){
 
  let randomX=Math.floor(Math.random()*400);
  let randomY=Math.floor(Math.random()*400);
  yesBtn.style.position="absolute";

 yesBtn.style.top=`${randomY}px`;
  yesBtn.style.left=`${randomX}px`;
})