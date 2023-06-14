/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const arr=["Gold Medal","Silver Medal","Bronze Medal"]
    let arr2=[...score].sort((a,b)=>b-a)
    return score.map(el=>{
        let idx= arr2.indexOf(el)
        if(idx<3){
            return arr[idx]
        }
        return String(idx+1)
    })
    
};