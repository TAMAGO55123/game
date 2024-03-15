let monsterimg=document.createElement('img');
monsterimg.classList.add('monster');
monsterimg.style.marginLeft='auto';
monsterimg.style.marginRight='auto';
stagedata.stage.appendChild(monsterimg);
/**
 * モンスターを追加します。
 * @param {Object} monsterdata
 * @param {string} imgid 
 * @param {number} level 
 */
function monsterplus(monsterdata,imgid,level){
    let monster;
    if(level<15){
        monster = monsterdata.easy[Math.floor(Math.random*(monsterdata.easy.length))];
    }
    else if(level>=15&&level<30){
        monster = monsterdata.midium[Math.floor(Math.random*(monsterdata.midium.length))];
    }
    else if(level<=30){
        monster = monsterdata.hard[Math.floor(Math.random*(monsterdata.hard.length))];
    }
    let imgelement=document.querySelector(`img#${imgid}`);
    imgelement.src=monster.img;
    return monster;
}