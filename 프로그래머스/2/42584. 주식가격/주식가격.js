function solution(prices) {
    let ans=new Array(prices.length).fill(0)
    let stack=[]
    for(let i=0;i<prices.length;i++){
    
        while(stack.length&&prices[stack.at(-1)]>prices[i]){
            let pop= stack.pop()
            ans[pop]=i-pop
        }
        stack.push(i)
        
    }
    while(stack.length){
        let pop=stack.pop()
        ans[pop]=prices.length-1-pop
    }
   return ans
}