/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let pr= new MinPriorityQueue()

    for(let i=0;i<nums.length;i++){
       if(pr.size()<k){
           pr.enqueue(i,nums[i])
           continue
       }
       if(pr.front().priority<nums[i]){
           pr.dequeue()
           pr.enqueue(i,nums[i])
       }
    }
    let arr = []
    while(pr.size()){
        let dequeue= pr.dequeue()
        arr.push(dequeue.element)

    }
    return arr.sort((a,b)=>a-b).map(el=>nums[el])
};