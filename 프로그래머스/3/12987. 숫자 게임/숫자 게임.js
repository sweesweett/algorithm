function solution(A, B) {
    A.sort((a,b)=>b-a)
    B.sort((a,b)=>b-a)
    let i=0
    let j=0
    let count=0
    while(i<A.length){
        if(A[i]<B[j]){
            count++
            i++
            j++
        }else{
            i++
        }
    }
    return count
}