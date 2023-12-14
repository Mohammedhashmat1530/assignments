
/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 */



 setInterval(()=>{
    let Currdate=new Date()
    let hr=Currdate.getHours();
    let min=Currdate.getMinutes();
    let sec=Currdate.getSeconds();
    if(hr>12){
        hr=hr-12;
        console.log(hr+":"+min+"::"+sec+" "+"PM")
    }else{
        console.log(hr+":"+min+"::"+sec+" "+"AM")
    }
 },1000)
