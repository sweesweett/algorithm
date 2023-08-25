/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let ans=[]
    let left=0,right=nums.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(target>nums[middle]){
            left=middle+1
        }else{
            right=middle-1
        }

    }

    for(let i= left;i<=nums.length;i++){
        if(target===nums[i]){
            ans.push(i)
        }else{
            return ans
        }
    }

};