function timer(sec){
    sec--;
    console.log(`sec: ${sec}`);
    let secTXT = "";
    switch (sec){
        case 1:
            secTXT = "секунда";
            break;
        case 2:
        case 3:
        case 4:
            secTXT = "секунды";
            break;
        default:
            secTXT = "секунд";
    }

    document.getElementById("counter_desc").textContent = secTXT;
    document.getElementById("counter").textContent = sec;
    if (sec>0){
        setTimeout(timer,1000,sec);
    }
    else{
        window.location = "https://maxima.life";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let sec = Number(document.getElementById("counter").textContent);
    setTimeout(timer,1000,sec);
});