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

function menuhover() {
    document.getElementById("menubutton").innerHTML = "<img src=\"Darren/images/menugold.png\">";
}

function menuhoverout() {
    document.getElementById("menubutton").innerHTML = "<img src=\"Darren/images/menu.png\">";
}

function changebackbuttongold() {
    document.getElementById("backbutton").innerHTML = "<img src=\"Darren/images/backgold.png\">";
}

function changebackbuttonwhite() {
    document.getElementById("backbutton").innerHTML = "<img src=\"Darren/images/back.png\">";
}

function closesidenav() {
    document.getElementById("sideNav").style.width = "0";
}

function opensidenav() {
    document.getElementById("sideNav").style.width = "250px";
}

