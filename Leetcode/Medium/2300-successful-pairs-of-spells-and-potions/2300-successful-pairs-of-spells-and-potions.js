/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b)=>a-b)
    let ans=[]
    for(let val of spells){
        let left=0
        let right=potions.length-1
        while(left<=right){
            let mid=Math.floor((right+left)/2)
            if(potions[mid]*val<success){
                left=mid+1
            }else{
                right=mid-1
            }
        }
       ans.push(potions.length-left)
    }
    return ans
};