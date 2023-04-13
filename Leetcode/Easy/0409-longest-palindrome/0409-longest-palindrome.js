/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let obj={}
    for(let val of s){
        if(obj[val]){
            obj[val]+=1
        }else{
            obj[val]=1
        }
        
    }
    let keys= Object.values(obj)
    if(keys.length===1){
        return keys[0]
    }
    let length=keys.map(el=>Math.floor(el/2)*2).reduce((a,b)=>a+b,0)
    if(s.length-length>0){
        return length+1
    }else{
        return length
    }
    
    
};