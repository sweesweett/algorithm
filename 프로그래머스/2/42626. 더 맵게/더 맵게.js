function solution(scoville, K) {
    let arr=[...scoville]
    let [idx1,idx2]=[0,0]
    arr.sort((a,b)=>a-b)
    let newArr=[]
    let count=0
   function getMin(){
    if(arr[idx1]===undefined){
        return newArr[idx2++]
    }
    if(newArr[idx2]===undefined){
        return arr[idx1++]
    }
    if(arr[idx1]<newArr[idx2]){
        return arr[idx1++]
    }
    return newArr[idx2++]
    }
    while(true){
        let min1=getMin()
        let min2=getMin()
        if(min1===undefined){
            return -1
        }
        if(min1>=K){
            return count
        }
        if(min2===undefined){
            return -1
        }
   
        count++
        newArr.push(min1+min2*2)
        
    }
    
    return -1
}


