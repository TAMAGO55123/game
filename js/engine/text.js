const WaitForClick = async () => new Promise(resolve => document.addEventListener("keydown", resolve));
/**
 * 
 * @param {string} text
 * @param {HTMLDivElement} textarea
 * @param {number} time 
 * @param {TextSizepx} textpx 
 */
async function textdot(text,textarea,time,textpx){
    console.log(text)
    let data2=text.split('');
    let data3=(window.innerWidth-(textpx*2))/textpx;
    let data4='';
    let data5=data2.length;
    for (let a = 0; a < data5; a++) {
        data4 = data4+data2[a];
        console.log(textarea)
        textarea.innerHTML=data4;
        console.log(data4);
        await wait(time);
    }
    await WaitForClick();
    textarea.innerHTML='';
}