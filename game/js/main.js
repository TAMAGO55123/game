'use strict'
var namedata;
var level;
var attack;
var guard;
var hp;
var mp;
var xp;
var themmonstar;
addEventListener('load',async function(){
    var localdataload=localload();
    
    if(localdataload==undefined){
        window.alert('初期設定を行います。');
        namedata=prompt('名前を入力してください。');
        localsave({
            "name":namedata,
            "level":1,
            "attack":50,
            "guard":50,
            "hp":50,
            "mp":10,
            "xp":1
        });
        localdataload=localload();
    }
    
    
    namedata=localdataload.name;
    level=localdataload.level;
    attack=localdataload.attack;
    guard=localdataload.guard;
    hp=localdataload.hp;
    mp=localdataload.mp;
    xp=localdataload.xp;
    
    //レベルに応じてモンスターを出す
    themmonstar=monsterplus(monsterdata,monsterimg,level);
    await textdot(`${themmonstar.name}が現れた! ステータス情報.... HP:${themmonstar.hp},貰える経験値:${themmonstar.xp},攻撃力:${themmonstar.attack},防御力:${themmonstar.guard}です!`,stagedata.textarea,50,30);
    
});