/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj={}
    for(let val of words){
        obj[val]=obj[val]+1||1
    }
    return Object.keys(obj).sort((a,b)=>{
    if(obj[b]-obj[a]===0){
        return a.localeCompare(b)
    }else if( obj[b]-obj[a]>0){
        return 1
    }else{
        return -1
    }}).slice(0,k)
    
};