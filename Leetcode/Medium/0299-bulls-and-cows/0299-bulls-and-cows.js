/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let map = new Map()
    let set = new Set()
    let bulls = 0,cows=0
    for(let i=0;i<secret.length;i++){
        if(secret[i]===guess[i]){
            bulls+=1
            continue
        }
        if(map.has(secret[i])){
            map.set(secret[i],map.get(secret[i])+1)
        }else{
            map.set(secret[i],1)
        }
        set.add(i)
    }
    set.forEach((i)=>{
        if(map.has(guess[i])){
                cows+=1
                map.set(guess[i],map.get(guess[i])-1)
                if(map.get(guess[i])===0){
                    map.delete(guess[i])
                }
            }

    })
    return bulls+'A'+cows+'B'

};