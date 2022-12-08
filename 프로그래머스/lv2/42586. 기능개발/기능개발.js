function solution(progresses, speeds) {
    var answer = [...progresses];
    let bb=[]
    let dd=[1]
    answer=answer.map((el,idx)=>Math.ceil((100-el)/speeds[idx]))
    bb.push(answer[0])
    for(let i =1;i<answer.length;i++){
        if(bb[bb.length-1]<answer[i]){
            bb.push(answer[i])
            dd.push(1)
          
        }else{
            dd[dd.length-1]+=1
        }
        
    }
    return dd
} 