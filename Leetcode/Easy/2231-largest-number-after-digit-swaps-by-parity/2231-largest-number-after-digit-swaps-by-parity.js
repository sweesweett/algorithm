/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    if(num<100){
        return num
    }
    let arr= [...String(num)].map(Number)
    let pr = new MaxPriorityQueue()
    pr.enqueue(num)
    for(let i=0;i<arr.length;i++){
        let idx=i+1
        let max=-Infinity
        while(idx<arr.length){
            if(arr[i]%2===arr[idx]%2){
                if(max===-Infinity||arr[max]<arr[idx]){
                     max=idx
                }
               
            }
            idx++
        }
        if(max===-Infinity){
            continue
        }
        if(arr[i]<arr[max]){
            let tmp=arr[i]
            arr[i]=arr[max]
            arr[max]=tmp
            pr.enqueue(arr.join(''))
        }
        

    }
   return pr.front().priority
};