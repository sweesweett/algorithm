/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let obj={}
    for(let el of s){
        if(obj[el]){
            obj[el]+=1
        }else{
            obj[el]=1
        }
        
        
    }
    for(let el of t){
        if(obj[el]){
            obj[el]-=1
        }else{
            return false
        }
        
        
        
    }
    return true
};