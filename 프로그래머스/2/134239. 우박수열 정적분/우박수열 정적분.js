function solution(k, ranges) {
    let num=k
    let i=0
    let arr=[]
    let ans=[]
    arr.push([i,num])
    i++
    while(num!==1){
        if(num%2){
            num=num*3+1

        }else{
            num/=2
        }
        arr.push([i,num])
        i++
    }
    ans.push(0)
    for(let i=1;i<arr.length;i++){
        let [x1,y1]=arr[i-1]
        let [x2,y2]=arr[i]
        let integral=(y2-y1)/(x2-x1)/2
        let con=-integral*2*x1+y1
        ans.push((ans.at(-1)||0)+(integral*(x2**2)+con*x2)-(integral*(x1**2)+con*x1))

        
        
    }
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
        let endVal=ans[fixedEnd]
        let startVal=ans[start]
        if(!endVal===undefined||!startVal===undefined){
            answer.push(-1)
        }else{
            answer.push(Math.abs(endVal-startVal))
        }
    }
    return answer
}
