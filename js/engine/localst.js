function localload(){
    if(localStorage.setdata==1){
        let data={
            "name":localStorage.name,
            "level":localStorage.level,
            "attack":localStorage.attack,
            "guard":localStorage.guard,
            "hp":localStorage.hp,
            "mp":localStorage.mp,
            "xp":localStorage.xp
        }
        return data;
    }
    else{
        return undefined;
    }
}
function localsave(array){
    localStorage.setItem('name',array.namedata);
    localStorage.setItem('level',array.level);
    localStorage.setItem('attack',array.attack);
    localStorage.setItem('guard',array.guard);
    localStorage.setItem('hp',array.hp);
    localStorage.setItem('mp',array.mp);
    localStorage.setItem('xp',array.xp);
    localStorage.setItem('setdata',1);
}