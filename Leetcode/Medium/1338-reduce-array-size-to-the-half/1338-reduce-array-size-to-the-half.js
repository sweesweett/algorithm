/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let obj={}
    let origin=arr.length
    let ddd=0
    let pr= new MaxPriorityQueue()
    for(let val of arr){
        if(obj[val]){
            obj[val]+=1
        }else{
            obj[val]=1
        }
    }
    for(let key in obj){
        pr.enqueue(Number(key),obj[key])
   
    }
   while(pr.size()>0){
       let val= pr.dequeue()
       ddd++
       origin -= val.priority
       if(origin<=arr.length/2){
           return ddd
       }



   }
    return 0
};