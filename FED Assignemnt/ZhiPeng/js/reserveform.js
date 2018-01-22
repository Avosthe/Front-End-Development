// JavaScript source code
$(document).ready(function () {
    $("form").submit(function () {
        alert("Your reservation is completed!");
    });
});

var deposit;

function slots() {
    var timeslot;
    var now = new Date();
    var opening;
    var closing;
    var options = '';

    if (now.getDay() >= 0 && now.getDay() <= 4) {
        opening = 10;
        closing = 21;
        for (var i = 0; i < 20; i++) {
            options += '<option value="' + '10:00-11:30' + '"/>';
        }
        document.getElementById("slots").innerHTML = options;

    }

    else if (now.getDay() == 5) {
        opening = 11;
        closing = 16;
        for (var i = 0; i < 20; i++) {
            options += '<option value="' + '10:00-11:30' + '"/>';
        }
        document.getElementById("slots").innerHTML = options;
    }

    else if (now.getDay() == 6) {
        opening = 11;
        closing = 15;
        for (var i = 0; i < 20; i++) {
            options += '<option value="' + '10:00-11:30' + '"/>';
        }
        document.getElementById("slots").innerHTML = options;
    }

}

function testde() {
 
    var pax = document.getElementById("seats").value;
    if (pax == 1) {
        deposit = 1 * 5;
    }

    else if (pax == 2) {
        deposit = 2 * 5;
    }

    else if (pax == 3) {
        deposit = 3 * 5;
    }

    else if (pax == 4) {
        deposit = 4 * 5;
    }

    else if (pax == 5) {
        deposit = 5 * 5;
    }

    else if (pax == 6) {
        deposit = 6 * 5;
    }
    document.getElementById("deposit").innerHTML = "</br>Deposit: <u>$" + deposit + "</u>";

}