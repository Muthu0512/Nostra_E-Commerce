// disappear section

const dismiss = document.getElementById("dismiss");

dismiss.addEventListener("click", () => {
  document.querySelector(".disappear").style.display = "none";
});


// side navbar
let menubar=document.getElementById("menubar")
let sidenav=document.getElementById("side-nav")
let closesidenav=document.getElementById("close-sidenav")

menubar.addEventListener("click",()=>{
  sidenav.style.transitionDuration="1.5"
    sidenav.style.left="0%"
  
  
})
closesidenav.addEventListener("click",()=>{
  sidenav.style.transitionDuration="2s"
  sidenav.style.left="-100%"
    
})

// banner section

let slider = document.querySelector(".slider");

let slides = document.querySelectorAll(".slides");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
  if (slider.scrollLeft >= 1000) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 500;
  }
});
prev.addEventListener("click", () => {
  if (slider.scrollLeft <= 0) {
    slider.scrollLeft = 1500;
  } else {
    slider.scrollLeft -= 500;
  }
});

// Most wanted section

const hearts=document.querySelectorAll(".heart")

hearts.forEach(heart=>{
  heart.addEventListener("click",(event)=>{
    if(event.target.style.color==="white"){
      event.target.style.color="red"
    }
    else{
      event.target.style.color="white"
    }
  })
})

