var maxnumhours = 23;
var maxnummins = 59;
var maxnumsecs = 60;
var maxmilisecs = 999;

function hexifyWithZeroLead(tohex){
    var rtn = tohex.toString(16);
    return ( rtn.length == 1 ? "0" : "" ) + rtn;
}

function updateNumbers() {
    var start_time =1385986287;
    var duration = parseInt(Date.now() / 1000 - start_time);

    var seconds = duration % 60;
    if (seconds < 10)
        seconds = "0" + seconds;
    duration = parseInt(duration / 60);
    var minutes = duration % 60;
    if (minutes < 10)
        minutes = "0" + minutes;
    duration = parseInt(duration / 60);
    var hours = duration % 24;
    if (hours < 10)
        hours = "0" + hours;
    duration = parseInt(duration / 24);
    var days = duration;
    $('.days-number').text("" + days);
    $('.seconds').text(hours + " hours " + minutes + " minutes " + seconds + " seconds");
    setTimeout("updateNumbers()", 1000);
}

function updateBackground()
{
    //Set Current Time Variables
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var currentMiliSeconds = currentTime.getMilliseconds();
    var rounded = currentSeconds + (currentMiliSeconds / maxmilisecs);

    rednum = (Math.round(255 * ((currentHours) / maxnumhours)));
    rednum100 = (Math.round(100 * ((currentHours) / maxnumhours)));
    greennum = (Math.round(255 * ((currentMinutes) / maxnummins)));
    greennum100 = (Math.round(100 * ((currentMinutes) / maxnummins)));
    bluenum = (Math.round(255 * ((rounded) / maxnumsecs)));
    bluenum100 = (Math.round(100 * ((rounded) / maxnumsecs)));

    redhex = hexifyWithZeroLead(rednum);
    greenhex = hexifyWithZeroLead(greennum);
    bluehex = hexifyWithZeroLead(bluenum);

    var hex = "#" + redhex + greenhex + bluehex;      //Total HEX Value
    var fullredhex = "#"+redhex+"0000";               //RED Only Hex
    var fullgreenhex = "#00"+greenhex+"00";           //GREEN Only Hex
    var fullbluehex = "#0000"+bluehex;                //BLUE Only Hex

    jQuery('body').css('background-color',hex);
}
