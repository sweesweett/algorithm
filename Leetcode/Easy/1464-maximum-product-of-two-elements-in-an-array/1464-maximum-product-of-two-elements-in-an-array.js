/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let pr = new MaxPriorityQueue()
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let val= (nums[i]-1)*(nums[j]-1)
            if(!pr.front()||pr.front().priority<val){
                pr.enqueue(val)
            }
            
        }
    }

    return pr.front().priority
};