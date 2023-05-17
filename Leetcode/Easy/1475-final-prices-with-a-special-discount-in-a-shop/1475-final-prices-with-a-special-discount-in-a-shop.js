/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack=[]
    for(let i=0;i<prices.length;i++){
        if(!stack.length){
            stack.push(prices[i])
        }else{
            if(stack[stack.length-1]>=prices[i]){
                prices[i-1]=stack[stack.length-1]-prices[i]
            }else{
                let idx=i+1
                while(idx<prices.length){
                    if(stack[stack.length-1]>=prices[idx]){
                         prices[i-1]=stack[stack.length-1]-prices[idx]
                         break
                    }
                    idx++
                }
            }
            stack.push(prices[i])
            
        }
    }
    return prices
};