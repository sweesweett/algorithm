function solution(players, callings) {
    let map= new Map()
    players.forEach((el,idx)=>{
        map.set(el,idx)
        
    })
    callings.forEach(el=>{
        let callIdx= map.get(el)
        let tmp= players[callIdx]
        if(callIdx>0){
         players[callIdx]=players[callIdx-1]
         players[callIdx-1]=tmp
        map.set(el,callIdx-1)
        map.set(players[callIdx],callIdx)
        }
    })
    return players
}