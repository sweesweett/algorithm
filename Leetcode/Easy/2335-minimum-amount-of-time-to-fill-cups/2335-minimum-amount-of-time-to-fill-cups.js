/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let pr = new MaxPriorityQueue()
    let count=0
    for(let i=0;i<amount.length;i++){
        pr.enqueue(amount[i])
    }
    if(pr.front().priority===0){
        return 0
    }
    while(pr.size()>1){
        let de1 =pr.dequeue()
        let de2=pr.dequeue()
        if(de1.priority-1>0){
            pr.enqueue(de1.priority-1)
        }
        if(de2.priority-1>0){
             pr.enqueue(de2.priority-1)
        }
        count++
    }
  return pr.size()===1?count+ pr.front().priority:count
};