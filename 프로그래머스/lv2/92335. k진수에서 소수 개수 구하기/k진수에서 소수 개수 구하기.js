function solution(n, k) {
    let set= new Set()
    let count=0
   let arr=n.toString(k).split('0').map(Number)
    for(let val of arr){
        if(set.has(val)){
            count++
        }else if(isPrime(val)){
            count++
            set.add(val)
        }
        
    }
    return count
}
function isPrime(n){
    if(n===0){
        return false
    }
    if(n===1){
        return false
    }
    if(n===2){
        return true
    }
    if(n%2===0){
        return false
    }
    for(let i=3;i<n**0.5+1;i+=2){
        if(n%i===0){
            return false
        }
    }
    return true
}