function solution(X, Y) {
    var answer = []
    let obj={}
    for(let i of Y){
        
        if(obj[i]===undefined){
            obj[i]=1
        }else{
            obj[i]+=1
        }
        
        
    }
    for(let i of X){
        if(obj[i]){
            answer.push(Number(i))
            obj[i]-=1
        }else if(obj[i]===0){
            continue
        }
       
        
    }
   
    if(answer.length===0){
        return '-1'
    }
    answer.sort((a,b)=>b-a)
    if(answer.filter(el=>el=='0').length===answer.length){
        return '0'
    }
    return answer.join('')
}