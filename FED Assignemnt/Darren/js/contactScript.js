// JavaScript source code

function initMap() {
    var random = { lat: 1.337345, lng: 103.864598 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: random
    });
    var marker = new google.maps.Marker({
        position: random,
        map: map
    });
}

function status()
{
    var now = new Date();
    var hh = addzero(now.getHours());
    var mm = addzero(now.getMinutes());
    var ss = addzero(now.getSeconds());
    var opening;
    var closing;

    if (now.getDay() >= 0 && now.getDay() <= 4) {
        opening = 10;
        closing = 21;
    }

    else if (now.getDay() == 5) {
        opening = 11;
        closing = 16;
    }

    else if (now.getDay() == 6) {
        opening = 11;
        closing = 15;
    }

    if (now.getHours() >= opening && now.getHours() <= closing) {
        document.getElementById("time").innerHTML = "We are currently <u>open!</u>";
    }
    else {
        document.getElementById("time").innerHTML = "Sorry, we are <u>closed</u>, please come back tomorrow!";
    }

    document.getElementById("clock").innerHTML = 'The Time is Now: ' + hh + ':' + mm + ':' + ss;
    var t = setTimeout(status, 100);

}

function addzero(i) {
    if (i < 10) {
        return (i = "0" + i);
    };
    return i;
}