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