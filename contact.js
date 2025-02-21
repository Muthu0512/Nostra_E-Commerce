// side navbar
let menubar=document.getElementById("menubar")
let sidenav=document.getElementById("side-nav")
let closesidenav=document.getElementById("close-sidenav")

menubar.addEventListener("click",()=>{
  sidenav.style.transitionDuration="1.5s"
    sidenav.style.left="0%"
  
  
})
closesidenav.addEventListener("click",()=>{
  sidenav.style.transitionDuration="2s"
  sidenav.style.left="-100%"
    
})