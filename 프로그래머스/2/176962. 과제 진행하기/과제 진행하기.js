function solution(plans) {
    let stack=[]
    let answer=[]
plans.sort((a,b)=>{
    let aArr=a[1].split(':').map(Number)
    let bArr=b[1].split(':').map(Number)
    if( aArr[0]>bArr[0]){
        return 1
    }else if(aArr[0]<bArr[0]){
        return -1
    }else{
        return aArr[1]<bArr[1]?-1:1
    }
    
})  
    for(let i=0;i<plans.length-1;i++){
        let [name,time,takingTime]=plans[i]
        let sub=subTime(time,plans[i+1][1])
            if(sub<takingTime){
                stack.push([name,takingTime-sub])
            }else{
                answer.push(name)
                if(stack.length){
                    getTime(sub-takingTime)
                }
                    
            }
        }
     answer.push(plans[plans.length-1][0])
    while(stack.length){
        answer.push(stack.pop()[0])
    }
    
    
    function subTime(time1,time2){
        let [h,m]=time1.split(':')
        let [h1,m1]=time2.split(':')
        let subH=h1-h
        let subM=m1-m
        return (h1-h)*60+subM
    }
    function getTime(takingTime){
        while(takingTime>=0&&stack.length){
            let [name,time]=stack.pop()
            if(takingTime-time>=0){
                answer.push(name)
            }else{
                stack.push([name,time-takingTime])
                
            }
             takingTime-=time
        }
   
    }
    return answer
}