function solution(targets) {
    targets.sort((a,b)=>a[1]-b[1])
    let end=-1
    let count=0
    for(let i=0;i<targets.length;i++){
        let[x,y]=targets[i]
        if(end<=x){
            count++
            end=y
        }
    }
    return count
}