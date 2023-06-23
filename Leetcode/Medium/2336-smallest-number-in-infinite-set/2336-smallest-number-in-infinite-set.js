
var SmallestInfiniteSet = function() {
    this.pr = new MinPriorityQueue()
    for(let i=1;i<=1000;i++){
        this.pr.enqueue(i)
    }
  
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let dq=this.pr.dequeue()
    while(this.pr.front()&&dq.priority===this.pr.front().priority){
        this.pr.dequeue()
    }
    return dq.priority
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
         this.pr.enqueue(num)
   
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */