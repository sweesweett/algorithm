function solution(arrayA, arrayB) {
    //공약수를 구하는데 다른 배열의 공약수이면 안됨
    let gcdA=getCommonDivisor(arrayA)
    let gcdB=getCommonDivisor(arrayB)
    return Math.max(findAns(arrayB,gcdA),findAns(arrayA,gcdB))
    
}
function findAns(arr,gcd){
    for(let val of arr){
        if(val%gcd===0){
            return 0
        }
    }
    return gcd
}

function getCommonDivisor(arr){
    let copy=[...arr]
    let set = new Set()
    for(let i=1;i<copy.length;i++){
        let [p,q]=[copy[i-1],copy[i]]
        if(p>q){
            [p,q]=[q,p]
        }
        while(p>1){
           if(q%p===0){
            break
        }
        tmp=q%p
        q=p
        p=tmp
        }
        copy[i]=p
    }
    
    return copy.at(-1)
}