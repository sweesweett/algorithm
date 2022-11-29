function solution(number, limit, power) {
    var answer = [1]
    for(let i =2;i<=number;i++){
        answer.push(dd(i))
    }
    return answer.reduce((a,b)=>{
        if(b>limit){
            return a+power
        }else{
            return a+b
        }
        
    },0)
}
function dd(num){
    let answer=0
    for(let i =1;i<=num**0.5;i++){
        if(i===num**0.5){
            answer+=1
        }
        else if(num%i===0){
            answer+=2
        }
    }
    return answer
}