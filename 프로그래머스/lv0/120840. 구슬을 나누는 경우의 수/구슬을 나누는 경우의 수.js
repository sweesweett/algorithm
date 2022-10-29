function solution(balls, share) {
    var answer = 0;
    return fac(balls)/(fac(balls-share)*fac(share))
}
function fac(n){
    let answer =BigInt(1)
    for(let i = 2; i<=n;i++){
        answer*=BigInt(i)
    }
   
    return answer
}