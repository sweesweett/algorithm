function solution(score) {
    let answer = [];
    for(let i =0; i<score.length; i++){
        answer.push(avg(score[i]))
    }
    let tmp =[...answer]
    let obj={}
    tmp=tmp.sort((a,b)=>b-a)
    tmp.forEach((el,idx)=> {
        if(obj[el]===undefined){
           obj[el]=idx+1
        }
        })
    answer=answer.map(el=>obj[el])
    return answer;
}
function avg(arr){
    return (arr[0]+arr[1])/2    
}
