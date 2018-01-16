// JavaScript source code
function submit() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    document.getElementById("animate").innerHTML = "Form is proccessing";
    function frame() {
        if (pos == 350) {
            clearInterval(id);
            alert("Your ordered has been delivered")
            location.reload(true);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}

function reload() {
    location.reload(true);
}