/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let pr = new MinPriorityQueue()
    let count=0
    for(let val of nums){
        pr.enqueue(val)
    }
    while(pr.size()>0){
        let min = pr.front().priority
        while(pr.front()&&pr.front().priority===min){
            pr.dequeue()
        }
        if(min>0){
            count++
        }

        
    }
    return count
};