function solution(players, callings) {
    let map={}
    players.forEach((el,idx)=>{
        map[el]=idx
        
    })
    callings.forEach(el=>{
        let callIdx= map[el]
        let tmp= players[callIdx]
        if(callIdx>0){
         players[callIdx]=players[callIdx-1]
         players[callIdx-1]=tmp
        map[el]=callIdx-1
        map[players[callIdx]]=callIdx
        }
    })
    return players
}