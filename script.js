timer = document.querySelector('.clock');

startbtn = document.querySelector(".start");
resetbtn=document.querySelector(".reset");
stopbtn=document.querySelector(".stop");

startbtn.addEventListener('click',startfun);
stopbtn.addEventListener('click',stopfun);
resetbtn.addEventListener('click',resetfun);
let stopwatch=null;
function startfun(ele)
{   
    
    let curr_time=parseInt(ele.target.dataset.start);
    if(stopwatch==null){
     stopwatch=setInterval(() => {
        curr_time+=1;
        let millisec=curr_time%10;
        let second=(parseInt(curr_time/10))%60;
        let minutes=parseInt(curr_time/600);
        let stopwatch_display=`${String(minutes).padStart(2,'0')} : ${String(second).padStart(2,'0')} : ${String(millisec)+'0'}`;
        ele.target.dataset.start=curr_time;
        timer.innerText=stopwatch_display;
    }, 100);
}
    
}
function stopfun()
{
   
    clearInterval(stopwatch);
    stopwatch=null;
    console.log( startbtn.dataset.start);
}

function resetfun()
{
   
    clearInterval(stopwatch);
    startbtn.dataset.start=timer.innerText="00:00:00";
}

