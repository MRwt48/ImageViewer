//CREATING DIVS

const image = document.getElementsByTagName("img");
var division = document.getElementsByClassName("display")[0];
var i = 0;
const length = image.length;
while (i < length) {
  var child = document.createElement("div");
  var childChild = document.createElement("img");
  child.className = "image";
  childChild.src = image[i].src;
  division.appendChild(child);
  child.appendChild(childChild);
  i++;
}
removeImg();

//REMOVING IMAGE
function removeImg() {
  var i = 0;
  while (i < length) {
    document.getElementsByTagName("img")[0].remove();
    i++;
  }
}

//NAVIGATION

//CREATING NAV
var nav = document.createElement("div");
var next = document.createElement("button");
var prev = document.createElement("button");
nav.className = "nav";
next.className = "control";
prev.className = "control";
next.id = "next";
prev.id = "prev";
next.innerHTML = "Next";
prev.innerHTML = "Prev";
division.appendChild(nav);
nav.appendChild(prev);
nav.appendChild(next);

//BUTTON FUNCTION
var imgNum = 0;
var zoomed = false;
//NAVIGATION NEXT
$(document).on("click", "#next", function() {
  if (imgNum >= length - 1) {
    $(".image").css("transform", "translateX(0px)");
    imgNum = 0;
  } else {
    imgNum++;
    $(".image").css("transform", "translateX(-" + imgNum * 500 + "px)");
  }
  $("img", this).css("transform", "scale(1)"); //reverting zoom
  zoomed = false;
});

//NAVIGATION PREV
$(document).on("click", "#prev", function() {
  if (imgNum < 1) {
    imgNum = length;
    imgNum--;
    $(".image").css("transform", "translateX(-" + imgNum * 500 + "px)");
  } else {
    var shift = imgNum * 500 - 500;
    imgNum--;
    $(".image").css("transform", "translateX(-" + shift + "px)");
  }
  $("img", this).css("transform", "scale(1)"); //reverting zoom
  zoomed = false;
});

//DOUBLE CLICK ZOOM
$(document).on("dblclick", ".image", function() {
  if (!zoomed) {
    $("img", this).css("transform", "scale(2)");
    zoomed = true;
  } else {
    $("img", this).css("transform", "scale(1)");
    zoomed = false;
  }
});
