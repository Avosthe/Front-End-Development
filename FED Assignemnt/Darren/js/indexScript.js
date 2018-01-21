// JavaScript source code
var x = 1
var circles = document.getElementsByClassName("navigation")
function slideshow() {
    if (x > 1) {
        circles[x - 2].style.backgroundColor = "grey";
    }
    if (x == 1) {
        circles[3].style.backgroundColor = "grey";
    }
    document.getElementById("slideshow").style.background = "url(\"Darren/images/slideshow" + x + ".jpg\")"
    circles[x - 1].style.backgroundColor = "black";
    x++;
    if (x > 4) {
        x = 1
    }
    setTimeout(slideshow, 3000);
}

function firstimage() {
    document.getElementById("slideshow").style.background = "url(\"Darren/images/slideshow1.jpg\")"
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "grey";
    }
    x = 1;
    circles[x - 1].style.backgroundColor = "black";
}


function secondimage() {
    document.getElementById("slideshow").style.background = "url(\"Darren/images/slideshow2.jpg\")"
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "grey";
    }
    x = 2;
    circles[x - 1].style.backgroundColor = "black";
}


function thirdimage() {
    document.getElementById("slideshow").style.background = "url(\"Darren/images/slideshow3.jpg\")"
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "grey";
    }
    x = 3;
    circles[x - 1].style.backgroundColor = "black";
}


function fourthimage() {
    document.getElementById("slideshow").style.background = "url(\"Darren/images/slideshow4.jpg\")"
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "grey";
    }
    x = 4;
    circles[x - 1].style.backgroundColor = "black";
}

slideshow()