function solution(numbers, target) {
    let total=0
   function dfs(current,idx){
    if(idx===numbers.length){
       if(current===target){
           total++
       }
        return;
    }
    dfs(current+numbers[idx],idx+1)
    dfs(current-numbers[idx],idx+1)
}
    dfs(0,0)
    return total
}

