function solution(prices) {
    let ans=[]
    for(let i=0;i<prices.length;i++){
        let stack=[]
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<=prices[j]){
                stack.push(prices[j])
            }else{
                ans.push(j-i)
                break
            }
        }
        if(ans.length!==i+1){
            ans.push(prices.length-1-i)
        }
        
        
    }
   return ans
}