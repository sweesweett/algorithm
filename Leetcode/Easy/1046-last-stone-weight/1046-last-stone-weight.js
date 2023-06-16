/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length===1){
        return stones[0]
    }
    let pr = new MaxPriorityQueue()
   
    for(let i=0;i<stones.length;i++){
        pr.enqueue(stones[i])     
    }
    while(pr.size()>1){
        let deque1= pr.dequeue()
        let deque2=pr.dequeue()
        pr.enqueue(deque1.priority-deque2.priority)
    
    }
    return pr.front().priority
};