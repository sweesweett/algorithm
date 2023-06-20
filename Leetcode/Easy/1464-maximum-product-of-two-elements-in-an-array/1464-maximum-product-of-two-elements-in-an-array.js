/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let pr = new MaxPriorityQueue()
    for(let i=0;i<nums.length;i++){
        pr.enqueue(nums[i])
    }

    return (pr.dequeue().priority-1)*(pr.dequeue().priority-1)
};