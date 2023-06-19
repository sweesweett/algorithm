/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    if(num<100){
        return num
    }
    let arr= [...String(num)].map(Number)
    let prOdd= new MaxPriorityQueue()
    let prEven= new MaxPriorityQueue()
    for(let i=0;i<arr.length;i++){
     if(arr[i]%2===0){
         prEven.enqueue(arr[i])
     }else{
         prOdd.enqueue(arr[i])
     }

    }
     for(let i=0;i<arr.length;i++){
     if(arr[i]%2===0){
         arr[i]=prEven.dequeue().priority
     }else{
         arr[i]=prOdd.dequeue().priority
     }

    }
    return arr.join('')
};