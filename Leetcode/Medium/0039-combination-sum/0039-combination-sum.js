/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans=[]
    candidates.sort((a,b)=>a-b)
    let dddd=(sum,arr)=>{
        if(sum===target){
            ans.push(arr)
            return;
        }
        for(let i=0;i<candidates.length;i++){
            if(sum+candidates[i]>target){
                return;
            }
            if(candidates[i]<arr.at(-1)){
               continue
            }
            dddd(sum+candidates[i],[...arr,candidates[i]])
        }
        return;
    }
    dddd(0,[])
    return ans
};