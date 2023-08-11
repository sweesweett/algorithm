/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer=[]
    let ddd=(arr,set)=>{
        if(set.size===nums.length){
            answer.push(arr)
            return;
        }
        for(let val of nums){
            
            if(!set.has(val)){
               ddd([...arr,val],new Set([...set,val]))
            }

        }
    }
    ddd([],new Set())
    return answer

};