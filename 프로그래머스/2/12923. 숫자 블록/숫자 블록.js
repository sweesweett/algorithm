function solution(begin, end) {
    let arr= new Array(end-begin+1).fill(0)
    for(let i=begin;i<=end;i++){
        arr[i-begin]=findPrime(i)
    }
    if(begin===1){
        arr[0]=0
    }
    return arr
}
function findPrime(num){
    let MAX=10**7
    let maxResult=0
    for(let i=2;i<=num**0.5;i++){
        if(num%i===0){
            if(num/i>MAX){
                maxResult=i
                continue
            }
            return num/i
        }
    }
    return maxResult||1
}
