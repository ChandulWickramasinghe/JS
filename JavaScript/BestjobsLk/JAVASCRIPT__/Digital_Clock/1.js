setInterval(updateTime,1000);

function updateTime(){
    var clockTime = new Date();
    var clockMinutes = clockTime.getMinutes();
    var clockHoures = clockTime.getHours();
    var clockSecond = clockTime.getSeconds();
    
    if(clockHoures < 10 ){
        clockHoures = "0" + clockHoures;
    }
    if(clockMinutes < 10 ){
        clockMinutes = "0" + clockMinutes;
    }
    if(clockSecond < 10 ){
        clockSecond = "0" + clockSecond;
    }
    var clock = clockHoures + ":" + clockMinutes + ":" + clockSecond;
    document.getElementById("clock").innerText = clock;
}