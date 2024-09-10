function solution(k, ranges) {
    let arr=makingCoordArr(k)
    let reduceArr=makingIntegralArr(arr)
    let answer=[]
    for(let [start,end] of ranges){
        let fixedEnd=arr.length-1+end
        if(fixedEnd>arr.length-1||start>=arr.length){
            answer.push(-1)
            continue
        }
        if(start>fixedEnd){
            answer.push(-1)
            continue
        }
        let endVal=reduceArr[fixedEnd]
        let startVal=reduceArr[start]
        if(!endVal===undefined||!startVal===undefined){
            answer.push(-1)
        }else{
            answer.push(endVal-startVal)
        }
    }
    return answer
}

function makingIntegralArr(arr){
    let reduceArr=[0]
    for(let i=1;i<arr.length;i++){
        let [x1,y1]=arr[i-1]
        let [x2,y2]=arr[i]
        let integral=(y2-y1)/(x2-x1)/2
        let con=-integral*2*x1+y1
        reduceArr.push(reduceArr.at(-1)+integral*(x2**2-x1**2)+con*(x2-x1))
    }
    return reduceArr
}

function makingCoordArr(num){
    let i=1
    let arr=[[0,num]]
    
    while(num!==1){
        if(num%2){
            num=num*3+1

        }else{
            num/=2
        }
        arr.push([i,num])
        i++
    }
    return arr
}
