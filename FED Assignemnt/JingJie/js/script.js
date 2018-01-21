// JavaScript source code

var slideIndex = 0;
var slideImageList = {}
var check = true;
var check2 = true;
var check3 = true;

function checkBirthday() {
    document.querySelectorAll("#birthday img")[1].style.display = "none";
    var year = document.getElementById("Year").value;
    var month = document.getElementById("Month").value;
    var day = document.getElementById("Day").value;
    var now = new Date();

    if ((now.getFullYear() - year) > 18) {
        closeBirthday();
        showEligible();
    }
    else if ((now.getFullYear() - year) == 18) {
        if (((now.getMonth() + 1) - month) > 0) {
            closeBirthday();
            showEligible();
        }
        else if (((now.getMonth() + 1) - month) == 0) {
            if ((now.getDate() - day) >= 0) {
                closeBirthday();
                showEligible();
            }
        }
        else {
            closeBirthday();
            showUnderAge();
        }
    }
    else {
        closeBirthday();
        showUnderAge();
    }

}


function closeModalDialog() {
    var modalDialog = document.getElementById("glass-modal");
    modalDialog.style.visibility = "hidden";
    document.getElementById("main-content-wrapper").style.display = "initial";
    var bg_music = document.querySelector("audio");
    bg_music.play();
}

function closeBirthday() {
    var birthdayDialog = document.getElementById("birthday");
    birthdayDialog.style.display = "none";
}

function showUnderAge() {
    var countdown = 5;
    var underAge = document.getElementById("underAge");
    underAge.style.display = "block";
    var intervalFunction = setInterval(function () {
        var pAlert = document.querySelectorAll("#underAge p")[1].innerText = "Redirecting to HomePage in " + countdown + " second(s).";
        countdown -= 1;
        if (countdown == 0) {
            clearInterval(intervalFunction);
            window.location = "index.html";
        }
    }, 1000);
}

function showEligible() {
    var eligible = document.getElementById("eligible");
    eligible.style.display = "block";
}

function closeEligible() {
    var eligible = document.getElementById("eligible");
    eligible.style.display = "none";
}

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
            break
        }
    }
}

function qualitiesFadeIn() {
    var qualitiesList = document.querySelectorAll("#qualities div")
    if (check2 && (window.scrollY >= (window.innerHeight * 0.20))) {
        for (var x = 0; x < qualitiesList.length; x++) {
            qualitiesList[x].style.animation = "fadeIn 2.5s";
            qualitiesList[x].style.opacity = "1";
        }
        check2 = false;
    }
    if (!(check2) && (window.scrollY <= (window.innerHeight * 0.20))) {
        for (var x = 0; x < qualitiesList.length; x++) {
            qualitiesList[x].style.animation = "";
            qualitiesList[x].style.opacity = "0";
        }
        check2 = true;
    }
}

function bootUpStatistics() {
    var statNumList = document.querySelectorAll("#stat-1-num, #stat-2-num, #stat-3-num, #stat-4-num");
    statNum1 = statNumList[0];
    statNum2 = statNumList[1];
    statNum3 = statNumList[2];
    statNum4 = statNumList[3];

    let statNum1Max = 99;
    let statNum2Max = 7;
    let statNum3Max = 100;
    let statNum4Max = 23;

    var statNum1C = 0;
    var statNum2C = 0;
    var statNum3C = 0;
    var statNum4C = 0;

    if (check3 && (window.scrollY >= (window.innerHeight * 0.7))) {
        for (var x = 0; x < statNumList.length; x++) {
            statNumList[x].style.opacity = 1;
        }
        cUpInterval = setInterval(countUp, 50);
        check3 = false;
    }


    function countUp() {
        if ((statNum1C == statNum1Max) && (statNum2C == statNum2Max) && (statNum3C == statNum3Max) && (statNum4C == statNum4Max))
            clearInterval(cUpInterval);
        if (statNum1C < statNum1Max) {
            statNum1C += 1;
            statNum1.innerText = statNum1C + "%";
        }
        else {
            statNum1C.innerText = statNum1Max;
        }
        if (statNum2C < statNum2Max) {
            statNum2C += 1;
            statNum2.innerText = statNum2C;
        }
        else {
            statNum2C.innerText = statNum2Max;
        }
        if (statNum3C < statNum3Max) {
            statNum3C += 1;
            statNum3.innerText = statNum3C + "+";
        }
        else {
            statNum3C.innerText = statNum3Max;
        }
        if (statNum4C < statNum4Max) {
            statNum4C += 1;
            statNum4.innerText = statNum4C;
        }
        else {
            statNum4C.innerText = statNum4Max;
        }

    }
}

var listOfJobDivs = document.querySelectorAll("#job-1, #job-2, #job-3");

function setJobDivsAnimation() {
    for (var x = 0; x < listOfJobDivs.length; x++) {
        listOfJobDivs[x].addEventListener("mouseover", function () { this.style.animation = "popOut 1s"; this.style.transform = "translateY(-20px)"; });
    }
    for (var x = 0; x < listOfJobDivs.length; x++) {
        listOfJobDivs[x].addEventListener("mouseleave", function () { this.style.transform = "translateY(-20px)"; this.style.animation = "popIn 1s"; this.style.transform = "translateY(0)"; });
    }
}

var listOfJobModal = document.querySelectorAll("#apply-job-1, #apply-job-2, #apply-job-3");
var listOfVideos = document.querySelectorAll("video");
var arrayCheck = new Array("", "hidden");

function showHideJob() {
    if (arrayCheck.includes(listOfJobModal[0].style.visibility)) {
        document.querySelector("body").style.overflowY = "hidden";
        listOfJobModal[0].style.visibility = "visible";
        listOfJobModal[0].style.opacity = "1";
    }
    else {
        if (!(listOfVideos[0].paused)) {
            listOfVideos[0].pause();
        }
        document.querySelector("body").style.overflowY = "initial";
        listOfJobModal[0].style.opacity = "0";
        listOfJobModal[0].style.visibility = "hidden";
    }
}

function showHideJob2() {
    if (arrayCheck.includes(listOfJobModal[1].style.visibility)) {
        document.querySelector("body").style.overflowY = "hidden";
        listOfJobModal[1].style.visibility = "visible";
        listOfJobModal[1].style.opacity = "1";
    }
    else {
        if (!(listOfVideos[1].paused)) {
            listOfVideos[1].pause();
        }
        document.querySelector("body").style.overflowY = "initial";
        listOfJobModal[1].style.opacity = "0";
        listOfJobModal[1].style.visibility = "hidden";
    }
}

function showHideJob3() {
    if (arrayCheck.includes(listOfJobModal[2].style.visibility)) {
        document.querySelector("body").style.overflow = "hidden";
        listOfJobModal[2].style.visibility = "visible";
        listOfJobModal[2].style.opacity = "1";
    }
    else {
        if (!(listOfVideos[2].paused)) {
            listOfVideos[2].pause();
        }
        document.querySelector("body").style.overflow = "initial";
        listOfJobModal[2].style.opacity = "0";
        listOfJobModal[2].style.visibility = "hidden";
    }
}

var mute = document.getElementById("mute");
var speaker = document.getElementById("speaker");
var music = document.getElementById("music");
music.volume = 0.2;

function muteUnmute() {
    if (speaker.style.display == "" || speaker.style.display == "initial") {
        music.volume = 0;
        speaker.style.display = "none";
        mute.style.display = "initial";
    }
    else {
        music.volume = 0.5;
        mute.style.display = "none";
        speaker.style.display = "initial";
    }
}

var cto = document.getElementById("cto-information");
var cto_img = document.getElementById("cto-img");
var cto_swaggy_img = document.getElementById("cto-swaggy-picture")

function showHideCTOInformation() {
    if (arrayCheck.includes(cto.style.visibility)) {
        document.querySelector("body").style.overflowY = "hidden";
        cto.style.opacity = "1";
        cto.style.visibility = "visible";
        cto.classList.toggle("cto-slide-right");
        cto_swaggy_img.classList.toggle("cto-zoom-in");
        cto_swaggy_img.style.transform = "scale(1.25)";
    }
    else {
        cto.style.opacity = "0";
        cto.style.visibility = "hidden";
        document.querySelector("body").style.overflowY = "initial";
        cto.classList.toggle("cto-slide-right");
        cto_swaggy_img.classList.toggle("cto-zoom-in");
        document.getElementById("close2").style.opacity = "0";
        cto_swaggy_img.style.transform = "scale(1)";
    }
}

function limitStartDate() {
    var currentDate = new Date();
    var month = currentDate.getMonth() + 1;
    if (month.toString().length == 1)
        month = "0" + month.toString();
    var day = currentDate.getDay();
    if (day.toString().length == 1)
        day = "0" + day.toString();
    var dateList = document.querySelectorAll("input[name='applicant-start-date']");
    for (var x = 0; x < dateList.length; x++) {
        dateList[x].min = [currentDate.getFullYear(), month, day].join("-");
        dateList[x].max = [currentDate.getFullYear() + 1, month, day].join("-");
    }

}

limitStartDate();

cto_img.addEventListener("click", showHideCTOInformation);

document.getElementById("cto-information").onmousemove = function (e) {
    var close2 = document.getElementById("close2");
    close2.style.opacity = "1";
    close2.style.left = (e.clientX - 25) + "px";
    close2.style.top = (e.clientY - 25) + "px";
}

document.getElementById("cto-information").onclick = showHideCTOInformation;




window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", qualitiesFadeIn);
window.addEventListener("scroll", bootUpStatistics);

setJobDivsAnimation();