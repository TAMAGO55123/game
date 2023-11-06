/**
 * 
 * @param {colorcode} color 
 */
function addeffect(color){
    let data=document.querySelector('div#effect');
    data.style='display:block; background-color:'+color+';';
    wait(500);
    data.style='display:none; background-color:rgba(255,255,255,0);';
}