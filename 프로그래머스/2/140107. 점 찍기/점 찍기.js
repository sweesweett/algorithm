function solution(k, d) {
    let count=0
    for(let i=0;i<=d;i+=k){
        let maxY=Math.sqrt(d**2-i**2)
        count+=Math.floor((maxY/k))+1
    }
    return count
}