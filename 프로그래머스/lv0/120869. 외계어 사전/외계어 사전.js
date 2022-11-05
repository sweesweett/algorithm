function solution(spell, dic) {
for(let i =0; i<dic.length;i++){
    let count=0
   for(let j=0;j<spell.length;j++){
       if(dic[i].includes(spell[j])){
           count++
       }
   }
    if(count===spell.length){
        return 1
    }
}
    return 2
}