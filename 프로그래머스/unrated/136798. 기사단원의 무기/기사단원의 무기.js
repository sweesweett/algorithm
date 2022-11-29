function solution(number, limit, power) {
    var answer = 1
    for(let i =2;i<=number;i++){
        answer+=dd(i,limit,power)
    }
    return answer
}
function dd(num,limit,power){
    let answer=0
    for(let i =1;i<=num**0.5;i++){
        if(i===num**0.5){
            answer+=1
        }
        else if(num%i===0){
            answer+=2
        }
    }
    return answer>limit?power:answer
}