// JavaScript source code
function submit() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
            alert("Your ordered has been delivered")
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}