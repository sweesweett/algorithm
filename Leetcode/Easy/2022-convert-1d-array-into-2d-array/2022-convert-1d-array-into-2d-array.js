/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length!==m*n){
        return []
    }
    let ans=[]
    let start=0
    while(start<original.length){
        let subArr=original.slice(start,start+n)
        ans.push(subArr)
        start+=n

    }
    return ans
};