var btn = document.getElementById("check")
var bg = document.getElementById("body")
var image =document.querySelector(".img2")
var navbarh1 =document.getElementById("navh1")
var themeh1 =document.getElementById("themeh1")
var navbar =document.querySelector(".narbar")
var acnigth=document.querySelector(".acnigth")
var lightnight = document.querySelector(".lightnight")
var image2 =document.querySelector(".homemorg")
btn.addEventListener("change",function(event){
    if(this.checked){
        image.style.display="block"
        themeh1.textContent="Night"
        acnigth.style.display="block"
        acnigth.style.opacity="0.4"
        lightnight.style.display="block"
        lightday.style.display="none"
        image2.style.display="none"
    }
    else{
        image.style.display="none"
        themeh1.textContent="Day"
        acnigth.style.display="none"
        lightnight.style.display="none"
        lightday.style.display="block"
        image2.style.display="inline"
    }

})
var acbtn =document.getElementById("Ac-check")
var aconimg=document.querySelector(".ac-on")
var acoff=document.querySelector(".Ac")
var acname=document.querySelector(".acname")
var acoffsvg=document.querySelector(".ac-off2")
var temp=document.getElementById("hometemp")
var divtemp=document.querySelector(".temp")
var summerpng=document.querySelector(".summerpng")
var icepng=document.querySelector(".icepng")
acbtn.addEventListener("change",function(event){
    if(this.checked)
    {
        aconimg.style.display="block"
        acoff.style.display="none"
        temp.textContent="Home temperature 20'C"
        summerpng.style.display="none"
        icepng.style.display="inline"
    }
    else
    {
        aconimg.style.display="none"
        acoff.style.display="block"
        temp.textContent="Home temperature  25'C"
        summerpng.style.display="inline"
        icepng.style.display="none"
    }
})
var date = new Date();
const todaydate = document.getElementById("Date")
const todaytime = document.getElementById("time")
const todayday = document.getElementById("Day")
const noofday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function printDate()
{
    var date = new Date();
    var day = date.getDate();
    var month= date.getMonth()+1;
    var year = date.getFullYear();
    todaydate.innerHTML= day + "/" + month + "/" + year;
}
printDate();
function printDay(){
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayday.innerHTML=day;
}
printDay();
function printtime(){
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
    if(hour == 0){
        hour=12;
    }
    if (hour>12)
    {
        hour=hour-12;
        document.getElementById("ampm").innerHTML="PM";
    }
    if(hour < 10)
    {
        hour = "0"+ hour;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    document.getElementById("hours").innerHTML=hour;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    setTimeout(printtime,1000);
}
printtime();
var lightday = document.querySelector(".lightday")
var lightglow = document.querySelector(".lightglow")
var lighton = document.getElementById("lighton")
var lightongif =document.querySelector(".lightongif")
var lightoffgif=document.querySelector(".ligthoffgif")
lighton.addEventListener("change",function(event)
{
    if(this.checked)
    {
        lightglow.style.display="inline-block"
        lightday.style.display="none"
        lightoffgif.style.display="none"
        lightongif.style.display="inline"
       
    }
    else
    {
        lightglow.style.display="none"
        lightday.style.display="inline-block"
        lightoffgif.style.display="inline"
        lightongif.style.display="none"
    }
})
var fanbtn = document.querySelector("#fan-check")
var fanoff =document.querySelector(".fanoff")
var fanon = document.querySelector(".fanrun")
fanbtn.addEventListener("change",function(event)
{
    if(this.checked)
    {
        fanoff.style.display="none"
        fanon.style.display="inline-block"
    }
    else{
         fanoff.style.display="inline"
        fanon.style.display="none"
    }
})
var Nightshift =  document.getElementById("hours");
var period =  document.getElementById("ampm");
if(Nightshift = "06")
    {
       if(period = "PM")
       {
        btn.click();
       }
    }
var nighthome_lighton = document.querySelector(".nigthligth")
function updatecss()
{
if(btn.checked && lighton.checked)
{
   nighthome_lighton.style.display="block"
   image.style.display="none"
}
else
{
    nighthome_lighton.style.display="none"
}}
updatecss();