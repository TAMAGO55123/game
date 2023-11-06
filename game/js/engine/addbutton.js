var button={};
button.event={};
var stagedata={};
var buttonfunction={};

stagedata.stage=document.createElement('div');
stagedata.stage.style.width='100%';
stagedata.stage.style.height='200px';
stagedata.stage.id='stage';

stagedata.textarea=document.createElement('div');
stagedata.textarea.style.width='100%';
stagedata.textarea.style.height='200px';
stagedata.textarea.id='textarea';

button.attack=document.createElement('button');
button.attack.id='attack';
button.attack.classList.add('tn-custom01-front');
button.attack.innerHTML='戦う';
button.attack.onclick=buttonfunction.attack();

button.magic=document.createElement('button');
button.magic.id='magic';
button.magic.classList.add('tn-custom01-front');
button.magic.innerHTML='魔法';
button.magic.onclick=buttonfunction.magic();

button.guard=document.createElement('button');
button.guard.id='guard';
button.guard.classList.add('tn-custom01-front');
button.guard.innerHTML='防御';
button.guard.onclick=buttonfunction.guard();

button.mydata=document.createElement('button');
button.mydata.id='mydata';
button.mydata.classList.add('tn-custom01-front');
button.mydata.innerHTML='スキル';
button.mydata.onclick=buttonfunction.mydata();

var br=document.createElement('sb');
var brscriptdata=document.createElement('script');
brscriptdata.src='/lib/br.js';

document.querySelector('div#area').appendChild(stagedata.stage);
document.querySelector('div#area').appendChild(stagedata.textarea);
document.querySelector('div#button').appendChild(button.attack);
document.querySelector('div#button').appendChild(button.magic);
document.querySelector('div#button').appendChild(br);
document.querySelector('div#button').appendChild(button.guard);
document.querySelector('div#button').appendChild(button.mydata);
document.querySelector('div#button').appendChild(brscriptdata);
