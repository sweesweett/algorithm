function solution(n, m, section) {
    let idx=0
    let left=0
    let count=0
    while(left<section.length){
        if(section[idx]-section[left]<m){
            idx++
        }else{
            count++
            left=idx
        }
        
    }
    return count
}