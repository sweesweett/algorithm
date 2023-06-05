/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let ans=0
    let ddd=0
    while(tickets[k-ddd]>0){

        for(let i=0;i<tickets.length;i++){
           
            if(tickets[i]>0){
                tickets[i]-=1
                ans++
                if(tickets[k-ddd]===0){
                return ans
            }
            }
            if(i===0&&tickets[i]===0){
                tickets.shift()
                ddd++
                i--
            }
         
        }
    }
    return ans
}   