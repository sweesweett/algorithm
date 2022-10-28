function solution(numbers, direction) {
    let answer = [...numbers]
    if(direction==='left'){
        answer=[...answer.slice(1),numbers[0]]
        
    }else{
        answer=[numbers[numbers.length-1],...answer.slice(0,answer.length-1)]
    }
    return answer;
}