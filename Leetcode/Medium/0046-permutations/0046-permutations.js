/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer=[]
    let ddd=(set)=>{
        if(set.size===nums.length){
            answer.push([...set])
            return;
        }
        for(let val of nums){
            
            if(!set.has(val)){
               ddd(new Set([...set,val]))
            }

        }
    }
    ddd(new Set())
    return answer

};