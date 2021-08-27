$(document).ready(function(){
    //toggle menu bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i ').toggleClass('active');
    });
    
    //slide up 
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop:0 });
    });
});
var arr=["Web Designeer", "Youtuber", "Progammer"];
setInterval(function()
{
    var rand=Math.floor(Math.random()*3);
    document.getElementById("special").innerHTML=arr[rand];
},1000);
setInterval(function()
{
    var rand=Math.floor(Math.random()*3);
    document.getElementById("change").innerHTML=arr[rand];
},1000);

//dark mode and light mode
var rootProp=document.documentElement.style;
var mode=true;

function  changeMode(){
    if(mode)
    {
        darkMode();
        document.getElementById("toggle").innerHTML="Dark Mode";
        document.getElementById("home").style.backgroundImage="url(./images/my.jpg)";
    }
    else 
    {
        lightMde();
        document.getElementById("toggle").innerHTML="Light Mode";
        document.getElementById("home").style.backgroundImage="url(./images/my2.jpg)";
    }
    mode=!mode;
}
function lightMde()
{
    rootProp.setProperty("--background1","rgba(230,230,230)");
    rootProp.setProperty("--shadow1","rgba(119,119,119,0.5)");
    rootProp.setProperty("--shadow2","rgba(255,255,255,.85)");
    rootProp.setProperty("--labelColor","black");
    rootProp.setProperty("--labelcolor2","#d6d6d6");
    rootProp.setProperty("--acolor","#18d26e");
    rootProp.setProperty("--acolorhover","#35e888");
}
function darkMode()
{
    rootProp.setProperty("--background1","rgb(37, 37, 37)");
    rootProp.setProperty("--shadow1","rgb(0 0 0 / 45%)");
    rootProp.setProperty("--shadow2","rgb(255 255 255 /12%)");
    rootProp.setProperty("--labelColor","#d6d6d6");
    rootProp.setProperty("--labelcolor2","rgb(37, 37, 37)");
    rootProp.setProperty("--acolor","#35e888");
    rootProp.setProperty("--acolorhover","#18d26e");
}