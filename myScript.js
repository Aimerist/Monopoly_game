function Player(id, name, code){
    this.id = id; // 編號
    this.name = name; // 姓名
    this.dead = false; // 是否死亡
    this.code = code; // 顏色編號
    this.location = 0; // 所在位置
    this.money = 5000; // 所持金
    this.health = 100; // 健康度
    this.land = []; // 擁有領地

    this.move = function(stepCount){
        var oldLocation = this.location;
        this.location += stepCount;
        if(this.location > 19){
            this.location %= 19;
        }
        markMyLocation(this, oldLocation, this.location);
    }
}

var Player1 = new Player(0, '孫小美', 'A');
var Player2 = new Player(1, '金貝貝', 'B');
var Player3 = new Player(2, '阿土伯', 'C');
var Player4 = new Player(3, '錢夫人', 'D');
var players = [Player1, Player2, Player3, Player4];
var lands = 
["校門口","獸醫系","生技系","機會","機械系",
 "映霞湖","食品系","管院大廈","機會","餐旅系",
 "健康中心","體育館","水產系","機會","動畜系",
 "出納組","植醫系","電算中心","機會","合作社"];
 // 需要一個陣列來對照location的位置

var nowPlayer = 0; // 存放現在玩家
var playerNameText = document.getElementById("nowPlayerH");
var goSetps = document.getElementById("goStepsH");
var diceButton = document.getElementById("diceButtonH");
var eventText = document.getElementById("eventH");

var power = 1;

// 標記位置
function markMyLocation(Player, oldLocation, location){
    var code = Player.code;
    var oldLocationArea = document.getElementById(code + "sp" + oldLocation);
    var locationArea = document.getElementById(code + "sp" + location);
    oldLocationArea.classList.remove(code);
    oldLocationArea.innerHTML = "";
    locationArea.classList.add(code);
    locationArea.innerHTML = Player.name[0];
    getLand(Player, location);
    chaincode_GetLoca(location);
}

// 亂數事件
function getRandom(x){
    return Math.floor(Math.random()*x)+1;
}

// 現在的玩家
function showNowPlayer() {
    playerNameText.innerHTML = players[nowPlayer].name;  
}

// 骰子事件
function diceButtonClick() {
    diceNumber = Number(getRandom(6));
    var deadCount = 0;

     // 找到 html裡的走幾步
    goSetps.innerHTML= "走 " + diceNumber + " 步";
    showNowPlayer(); 
    eventText.innerText = "";
    players[nowPlayer].move(diceNumber);
	checkEvent(players[nowPlayer]);

    // 檢查後面有沒有死人再交棒
    if(!players[(nowPlayer+1)%4].dead){
        nowPlayer = (nowPlayer+1)%4;
    }
    else if(!players[(nowPlayer+2)%4].dead){
        nowPlayer = (nowPlayer+2)%4;
    }
    else if(!players[(nowPlayer+3)%4].dead){
        nowPlayer = (nowPlayer+3)%4;
    }
    else{
        winner(players[nowPlayer]);
    }

    updateData();
}

function checkEvent(Player){
    var nowLocation = Player.location;
    var locationName = lands[nowLocation];

    switch(nowLocation){
        case 5:
            eventText.innerText = Player.name + "眼前一黑！";
            Player.move(-5);
            break;
        case 10:
        	eventText.innerText = Player.name + "受傷送到了健康中心";
            Player.health -= 30;
            break;
        case 15:
            eventText.innerText = Player.name + "在出納組門口撿到了一疊鈔票！";
            Player.money += 3000;
            break;
        case 3:
            eventText.innerText = "機會命運功能＝研究限制";
            break;
        case 8:
            eventText.innerText = "機會命運功能＝研究限制";
            break;
        case 13:
            eventText.innerText = "機會命運功能＝研究限制";
            break;
        case 18:
            eventText.innerText = "機會命運功能＝研究限制";
            break;
    }
}

// 更新資訊
function updateData(){
    for(var i=0; i<4; i++){
        var dataMoney = document.getElementById(players[i].code + "_money");
        var dataland = document.getElementById(players[i].code + "_land");
        var datahealth = document.getElementById(players[i].code + "_health");
        if(players[i].dead) players[i].money = 0;
        dataMoney.innerText = players[i].money;
        dataland.innerText = players[i].land.length;
        datahealth.innerText = players[i].health;
        checkDead(players[i]);
    }
}

// 死亡檢查
function checkDead(Player){
    if(Player.money < 10 && !Player.dead)
    {
        Player.dead = true;
        Player.health = 0;
        document.getElementById("people" + Player.id).innerText += "(死亡)";
        freeLands(Player);
    }
}


// 取得土地
function getLand(Player, location){
    if(location % 5 != 0 && location % 5 != 3){
        var locationArea = document.getElementById("land" + location);
        locationArea.classList.add(Player.code);
        Player.land.push(lands[location]);
        eventText.innerText = Player.name + " 佔領了 " + lands[location];
        for(var i=0; i<4; i++){
            // 如果有人的就付錢
            if(i != Player.id && locationArea.classList.contains(players[i].code)){
                changeHolder(Player, players[i], location);
            }
        }
        chaincode_Changeholder(location, Player);
    }
}

// 土地轉移
function changeHolder(newHolder, oldHolder, location){
    var giveMiney = 500 * power;
    if(!oldHolder.dead){
        newHolder.money -= giveMiney;
        oldHolder.money += giveMiney;
        power++; // 提速
    	eventText.innerText = newHolder.name + " 奪走了 " + oldHolder.name + " 的 " + lands[location];
    }
    else{
    	eventText.innerText = newHolder.name + " 被迫付出了 " + giveMiney + " 買下了 " + oldHolder.name + " 的 " + lands[location];
    }
    document.getElementById("land" + location).classList.remove(oldHolder.code);
    //oldHolder.land.remove(location);
    oldHolder.land.pop();
}

// 釋放土地
function freeLands(Player){
    var locationArea;
    for(var i=1; i < 20; i++){
        locationArea = document.getElementById("land" + i);
        console.info(locationArea);
        if(!locationArea===null){
            console.info(locationArea.classList);
            $("#land"+i).removeClass(Player.code);
            console.info(Player.code);
        }
    }
    console.info(Player.land);
    for(var j=0; j<Player.land.length; j++){
        Player.land.pop();
    }
    updateData();
}

// 勝利畫面
function winner(Player){
    eventText.innerText = "恭喜" + Player.name +"獲得勝利！";
    diceButton.disabled = true;
}

// 引用的陣列處理
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


// 區塊鏈互動區

// 取得土地資訊
function chaincode_GetLoca(locaid){
    $.get("./get_loca/" +  locaid);
}

// 取得所有土地資訊
function chaincode_GetallLoca(){
    $.get("./get_all_loca/");
}

// 更改持有人
function chaincode_Changeholder(locaid, Player){
    $.get("./change_holder/" + locaid + "-" + Player.name, function(){
        $.get("./get_loca/" +  locaid);
    });
}

// 初始化持有人
function chaincode_Initholder(){
    for(var i=0; i<20; i++){
        if(i % 5 != 0 && i % 5 != 3){
            $.get("./change_holder/" + i + "-None");
        }
    }
}


// 初始化
function init(){
    players = [Player1, Player2, Player3, Player4];
    diceButton.onclick = diceButtonClick;
    for(var i=0; i<4; i++){
        players[i].move(0);
    }
    updateData();
    eventText.innerText = "歡迎來到Chaincode大富翁";
    chaincode_Initholder();
    chaincode_GetallLoca();
}

window.onload = init;