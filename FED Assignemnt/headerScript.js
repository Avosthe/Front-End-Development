// JavaScript source code
function currentPage() {
    var nameList = new Array();
    var test = document.querySelectorAll("nav a");

    for (var i = 0; i < test.length; i++) {
        nameList.push(test[i].name);
    }
    for (var i = 0; i < nameList.length; i++) {
        if (location.pathname.toString().includes(nameList[i])) {
            test[i].style.borderTop = "3px solid darkgoldenrod";
            test[i].style.color = "white";
            test[i].style.opacity = "1";
            break;
        }
    }
}

function opensidenav() {
    document.getElementById("sideNav").style.width = "250px";
}

function changebackbuttongold() {
    document.getElementById("backbutton").src = "Darren/images/backgold.png";

}

function changebackbuttonwhite() {
    document.getElementById("backbutton").src = "Darren/images/back.png";
}

function closesidenav() {
    document.getElementById("sideNav").style.width = "0";
}

var check = true;
function handleScroll() {
    var nav = document.querySelector("nav");
    if (check && (window.scrollY >= window.innerHeight)) {
        nav.style.position = "fixed";
        nav.classList.toggle("transform");
        check = false;
    }
    if (!(check) && (window.scrollY <= window.innerHeight)) {
        nav.style.position = "unset";
        nav.classList.toggle("transform");
        check = true;
    }
}
window.addEventListener("scroll", handleScroll);

