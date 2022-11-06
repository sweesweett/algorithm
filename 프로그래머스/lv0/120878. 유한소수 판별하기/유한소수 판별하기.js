// 둘다 기약분수인지(최대공약수가 있는지 확인)
// 기약분수면 분모 소인수 구하기 근데 2,5만있으면 1, 하지만 아니면 2
function solution(a, b) {
    var answer = 0;
    let tmpA=a/gg(a,b)
    let tmpB=b/gg(a,b)
    return tt(tmpB)
}
function tt(a){
    if(a%2===0){
        while(a%2===0){
            a/=2
        }
    }
    if(a%5===0){
        while(a%5===0){
            a=a/5
            
        }
      
    }
    if(a===1){
        return 1
    }
    if(a>1){
        return 2
    }
}
function gg(a,b){
    let [p,q]=[a,b]
    let tmp
    if(p>q){
        [p,q]=[q,p]
    }
    while(true){
        if(q%p===0){
           return p
        }
        tmp=q%p
        q=p
        p=tmp
    }
}
