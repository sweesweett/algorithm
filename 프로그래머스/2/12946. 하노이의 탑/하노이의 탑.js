

function solution(n) {
    const ans = [];
    const hanoi=(n,from,via,to)=>{
        if(n===1){
            ans.push([from,to])
            return
        }
        hanoi(n-1,from,to,via)
        ans.push([from,to])
        hanoi(n-1,via,from,to)
        
    }
    hanoi(n, 1, 2, 3)
    return ans
}