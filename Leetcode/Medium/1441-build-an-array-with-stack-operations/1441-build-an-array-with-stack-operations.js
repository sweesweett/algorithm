/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let ans=[]
    let idx=0
    let idx2=1
    while(idx<target.length){
        
       if(target[idx]!==idx2){
            ans.push('Push','Pop')    
        }else{
            ans.push('Push')
             idx++
        }
        idx2++ 
        

    }
    return ans
};