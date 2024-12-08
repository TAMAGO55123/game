let monsterimg=document.createElement('img');
monsterimg.classList.add('monster');
stagedata.stage.appendChild(monsterimg);
/**
 * モンスターを追加します。
 * @param {Object} monsterdata
 * @param {string} imgid 
 * @param {number} level 
 */
function monsterplus(monsterdata,level){
    var monster;
    if(level<15){
        monster = monsterdata.easy[Math.floor(Math.random(monsterdata.easy.length))];
        console.log(monster);
    }
    else if(level>=15&&level<30){
        monster = monsterdata.midium[Math.floor(Math.random(monsterdata.midium.length))];
        console.log(monster);
    }
    else if(level<=30){
        monster = monsterdata.hard[Math.floor(Math.random(monsterdata.hard.length))];
        console.log(monster);
    }
    monsterimg.src=monster.img;
    return monster;
}