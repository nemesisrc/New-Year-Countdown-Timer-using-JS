const newyear='1 Jan 2022';
const daysel=document.getElementById("days");
const minutesel=document.getElementById('minutes');
const hoursel=document.getElementById('hours');
const secondsel=document.getElementById('seconds');

function countdown(){
    var newyeardate= new Date(newyear);
    var currentdate= new Date();

    var diff= (newyeardate-currentdate)/1000;
    var days=Math.floor(diff/3600/24);
    var hours=Math.floor(diff/3600)%24;
    var minutes=(Math.floor(diff/60))%60;
    var seconds=Math.floor(diff%60);
    
    daysel.innerHTML=days
    hoursel.innerHTML=hours
    minutesel.innerHTML=minutes
    secondsel.innerHTML=seconds


}

countdown();
setInterval(countdown,1000)
