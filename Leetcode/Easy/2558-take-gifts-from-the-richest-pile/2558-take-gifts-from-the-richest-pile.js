/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let pr = new MaxPriorityQueue()
    let sum=0
    for(let i=0;i<gifts.length;i++){
            pr.enqueue(gifts[i])
    }
    while(k>0){
        pr.enqueue(Math.floor(Math.sqrt(pr.dequeue().priority)))
        k--
    }
    while(pr.size()>0){
        sum+=pr.dequeue().priority
    }
    return sum
};