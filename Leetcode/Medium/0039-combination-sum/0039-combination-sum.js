/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let map= new Map()
    let dddd=(sum,arr)=>{
        if(sum>target){
            return;
        }
        if(sum===target){
            map.set(arr.sort().join(','),arr)
            return;
        }
        for(let val of candidates){
            dddd(sum+val,[...arr,val])
        }
        return;
    }
    dddd(0,[])
    return [...map.values()]
};