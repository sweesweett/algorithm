/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k=k
    this.nums=nums
    this.pr= new MinPriorityQueue()
    for(let i=0;i<nums.length;i++){
        this.pr.enqueue(nums[i])
    }
    while(this.pr.size()>k){
    
        this.pr.dequeue()

    }

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
   
    if(this.pr.size()<this.k){
        
        this.pr.enqueue(val)
        return this.pr.front().priority
    }
    else if(this.pr.front().priority<val){
        this.pr.dequeue()
        this.pr.enqueue(val)
        return this.pr.front().priority
    }else{
       
        return this.pr.front().priority
    }
   
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */