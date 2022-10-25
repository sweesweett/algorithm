function solution(num, k) {
    const n= String(num).indexOf(String(k))
    
    return n>=0?n+1:-1
}