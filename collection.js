// dissaper section

const dismiss = document.getElementById("dismiss");

dismiss.addEventListener("click", () => {
  document.querySelector(".disappear").style.display = "none";
});

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

//Collection page search function
var search = document.getElementById("search");
var imageContainer = document.getElementById("image-container");
var imageBox = imageContainer.querySelectorAll(".imagebox");
var searchClose = document.getElementById("search-close");

search.addEventListener("keyup", function (event) {
  searchClose.style.display = "block";
  var enteredValue = event.target.value.toUpperCase();
  for (count = 0; count < imageBox.length; count += 1) {
    var itemName = imageBox[count].querySelector("h2").textContent;
    if (itemName.toUpperCase().indexOf(enteredValue) < 0) {
      imageBox[count].style.display = "none";
    } else {
      imageBox[count].style.display = "block";
      console.log(imageBox[count]);
    }
  }
});
searchClose.addEventListener("click", function () {
  search.value = "";
  imageBox.forEach((box) => {
    box.style.display = "block";
  });
  searchClose.style.display = "none";
});

// checkbox functionality

var checkBoxes = document.getElementsByName("checkbox");

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function (event) {
    var boxVal = event.target.value.toUpperCase();

    imageBox.forEach((box) => {
      var itemName = box.querySelector("h2").textContent.toUpperCase();

      if (itemName.includes(boxVal)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});
