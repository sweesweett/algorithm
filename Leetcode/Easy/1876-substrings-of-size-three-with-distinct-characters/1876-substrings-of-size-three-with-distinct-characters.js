/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count=0
    for(let i=0;i<s.length-2;i++){
        if(new Set([...s.slice(i,i+3)]).size===3){
            count++
        }
    }
    return count
};