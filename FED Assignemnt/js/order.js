// JavaScript source code
function date() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").setAttribute("min", today);
}

function time(){
    var today = new Date();
    var day = today.getDay();
    if (day == 0) {
        document.getElementById("time").setAttribute("min","11:00")
        document.getElementById("time").setAttribute("max","15:00");
    }
    if (day == 6) {
        document.getElementById("time").setAttribute("min","11:00");
        document.getElementById("time").setAttribute("max","16:00");
    }
}

function lul() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 2);
    function frame() {
        if (elem.style.left == window.innerWidth + 'px') {
            elem.style.visibility = "hidden";
            clearInterval(id);
            alert("Your ordered has been delivered")
            location.reload(true);
        } else {
            pos+=3;
            elem.style.left = pos + 'px';
        }
    }
}

