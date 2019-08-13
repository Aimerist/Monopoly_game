var nowPlayer;
var diceButton;
var nowStep00= 0;
var nowStep01= 0;
var nowStep02= 0;
var nowStep03= 0;

window.onload = init;
function init() {
    var diceButton = document.getElementById("diceButtonH");
    diceButton.onclick = diceButtonClick;
    nowPlayer = 0;
}

// 隨機數字
function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};

// 現在的玩家
function gameStart() {
    var playerName = document.getElementById("nowPlayerH");
    var player = ["孫小美","金貝貝","阿土伯","錢夫人"]; 
    playerName.innerHTML= player[nowPlayer];  
}
//
function getdicButton(){
    
}

function stepAll(){
    var nowStep = [0,1,2,3];
    var text01 = document.getElementById("text");
    var oldStep00 =0;
    var oldStep01 =0;
    var oldStep02 =0;
    var oldStep03 =0;
    text01.innerHTML=nowStep[nowPlayer];
    if(nowPlayer==0){
        oldStep00 = nowStep00;
        nowStep00 = nowStep00+diceButton;
        
        var Aspnowstep = "";
        var Aspoldstep = "";
        if(nowStep00 < 10) 
        {
            Aspnowstep = "Asp0" + nowStep00;
        }
        else 
        { 
            Aspnowstep = "Asp" + nowStep00;
        }
        
        if(oldStep00 < 10) 
        {
            Aspoldstep = "Asp0" + oldStep00;
        }
        else 
        { 
            Aspoldstep = "Asp" + oldStep00;
        }
        
        var textnow = document.getElementById(Aspnowstep);
        var textold = document.getElementById(Aspoldstep);
        document.getElementById(Aspnowstep).style.cssText="background-color:#fcc0be;";
        textnow.innerHTML="孫";
        
        if(oldStep00==0){
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(198,247,166,1)";
            textold.innerHTML="";
        }else if(oldStep00==3||oldStep00==8||oldStep00==13||oldStep00==18){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(243, 136, 135,1)"; 
            textold.innerHTML="";
        }else if(oldStep00==5){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:#21BC84"; 
            textold.innerHTML="";
        }else if(oldStep00==10){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(252, 225, 225,1)"; 
            textold.innerHTML="";
        }else if(oldStep00==15){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(255, 171, 64,1)"; 
            textold.innerHTML="";
        }else { 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(153,204,204,1)"; 
            textold.innerHTML="";
        }
        
    }else if(nowPlayer==1){
        oldStep01 = nowStep01;
        nowStep01 =nowStep01+diceButton;
        
        var Aspnowstep = "";
        var Aspoldstep = "";
        if(nowStep01 < 10) 
        {
            Aspnowstep = "Bsp0" + nowStep01;
        }
        else 
        { 
            Aspnowstep = "Bsp" + nowStep01;
        }
        
        if(oldStep01 < 10) 
        {
            Aspoldstep = "Bsp0" + oldStep01;
        }
        else 
        { 
            Aspoldstep = "Bsp" + oldStep01;
        }
        var textnow = document.getElementById(Aspnowstep);
        var textold = document.getElementById(Aspoldstep);
        
        document.getElementById(Aspnowstep).style.cssText="background-color:#FCE38A;";
        textnow.innerHTML="金";
        if(oldStep01==0){
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(198,247,166,1)";
            textold.innerHTML="";
        }else if(oldStep01==3||oldStep01==8||oldStep01==13||oldStep01==18){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(243, 136, 135,1)";
            textold.innerHTML="";
        }else if(oldStep01==5){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:#21BC84"; 
            textold.innerHTML="";
        }else if(oldStep01==10){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(252, 225, 225,1)"; 
            textold.innerHTML="";
        }else if(oldStep01==15){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(255, 171, 64,1)"; 
            textold.innerHTML="";
        }else { 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(153,204,204,1)"; 
            textold.innerHTML="";
        }
        
    }else if(nowPlayer==2){
        oldStep02 = nowStep02;
        nowStep02 =nowStep02+diceButton;
        
        var Aspnowstep = "";
        var Aspoldstep = "";
        if(nowStep02 < 10) 
        {
            Aspnowstep = "Csp0" + nowStep02;
        }
        else 
        { 
            Aspnowstep = "Csp" + nowStep02;
        }
        
        if(oldStep02 < 10) 
        {
            Aspoldstep = "Csp0" + oldStep02;
        }
        else 
        { 
            Aspoldstep = "Csp" + oldStep02;
        }
        
        var textnow = document.getElementById(Aspnowstep);
        var textold = document.getElementById(Aspoldstep);
        
        document.getElementById(Aspnowstep).style.cssText="background-color:#CDDFB6;";
        textnow.innerHTML="伯";
        if(oldStep02==0){
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(198,247,166,1)";
            textold.innerHTML="";
        }else if(oldStep02==3||oldStep02==8||oldStep02==13||oldStep02==18){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(243, 136, 135,1)"; 
            textold.innerHTML="";
        }else if(oldStep02==5){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:#21BC84"; 
            textold.innerHTML="";
        }else if(oldStep02==10){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(252, 225, 225,1)"; 
            textold.innerHTML="";
        }else if(oldStep02==15){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(255, 171, 64,1)"; 
            textold.innerHTML="";
        }else { 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(153,204,204,1)"; 
            textold.innerHTML="";
        }
        
    }else if(nowPlayer==3){
        oldStep03 = nowStep03;
        nowStep03 =nowStep03+diceButton;
        
        var Aspnowstep = "";
        var Aspoldstep = "";
        if(nowStep03 < 10) 
        {
            Aspnowstep = "Dsp0" + nowStep03;
        }
        else 
        { 
            Aspnowstep = "Dsp" + nowStep03;
        }
        
        if(oldStep03 < 10) 
        {
            Aspoldstep = "Dsp0" + oldStep03;
        }
        else 
        { 
            Aspoldstep = "Dsp" + oldStep03;
        }
        
        var textnow = document.getElementById(Aspnowstep);
        var textold = document.getElementById(Aspoldstep);
        
        document.getElementById(Aspnowstep).style.cssText="background-color:#DEDCEE;";
        textnow.innerHTML="錢";
        if(oldStep03==0){
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(198,247,166,1)";
            textold.innerHTML="";
        }else if(oldStep03==3||oldStep03==8||oldStep03==13||oldStep03==18){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(243, 136, 135,1)"; 
            textold.innerHTML="";
        }else if(oldStep03==5){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:#21BC84"; 
            textold.innerHTML="";
        }else if(oldStep03==10){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(252, 225, 225,1)"; 
            textold.innerHTML="";
        }else if(oldStep03==15){ 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(255, 171, 64,1)"; 
            textold.innerHTML="";
        }else { 
            document.getElementById(Aspoldstep).style.cssText="background-color:rgba(153,204,204,1)"; 
            textold.innerHTML="";
        }
        
    }
}

// 骰子事件
function diceButtonClick() {
    diceButton = getRandom(6);
    var goSetps = document.getElementById("goStepsH"); // 找到html裡的走幾步
    goSetps.innerHTML= "走 "+ diceButton + " 步";
    gameStart(); 
    stepAll();
    
    nowPlayer++;

    if(nowPlayer > 3){
        nowPlayer = 0;
    }
}
/*
function setSize()
{
    document.getElementById( "t2" ).style.fontSize = "30px";
}*/
/*
    if(nowPlayer == 1){
    document.getElementById("sp0"+diceButton).style.color="blue";
    A.style.cssText="background-color:#fcc0be;";
    };
    if(playerName.innerText == player[nowPlayer]){
        text01.innerHTML=player[nowPlayer];
    }else{
        
    }*/

