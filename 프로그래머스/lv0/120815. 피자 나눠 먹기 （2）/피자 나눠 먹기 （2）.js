function solution(n) {
    var answer = 0;
    return n/gcd(n,6)
}
function gcd  (num1,num2){
    let tmp
    if(num1<num2){
        [num1,num2]=[num2,num1]
    }
    
     while(true){
        if(num2%num1===0){
            break
        }
        tmp=num2%num1
        num2=num1
        num1=tmp
    }
    return num1;
}