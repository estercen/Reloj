// JQuery Document

$(function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);

});



/*This puts a 0 in front of numbers in a unit*/
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
