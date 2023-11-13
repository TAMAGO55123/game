 
// Promiseを使う方法
function sleepByPromise(sec) {
    return new Promise(resolve => setTimeout(resolve, sec*1000));
}
async function wait(sec) {
     
    console.log('wait ' + sec.toString() + ' sec right now!');

    await sleepByPromise(sec);

    console.log('wait ' + sec.toString() + ' sec done!');

} 
