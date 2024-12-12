/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
class APriorityQueue{
    constructor(arr){
        this.queue=[]
        
    }
    init(arr){
        this.queue=[...arr]
        this.sort()
    }
    push(val){
        this.queue.push(val)
        this.sort()
    }
    sort(){
        this.queue.sort((a,b)=>b-a)
    }
    shift(){
        return this.queue.shift()
    }
    sum(){
        return this.queue.reduce((a,b)=>a+b,0)
    }
}


var pickGifts = function(gifts, k) {
   let priority=new APriorityQueue()
   priority.init(gifts)
   for(let i=0;i<k;i++){
       priority.push(Math.floor(priority.shift()**0.5)) 

   }
   return priority.sum()
};