/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj={}
    for(let val of s){
        if(obj[val]){
            obj[val]+=1
        }else{
        obj[val]=1
        }
    }
    for(let val of t){
        if(!obj[val]){
            return val
        }else{
            obj[val]-=1
        }
    }
};