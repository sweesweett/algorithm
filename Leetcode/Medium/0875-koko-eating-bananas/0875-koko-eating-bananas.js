/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=0
    let right= Math.max(...piles)
    while(left<right){
        let mid= Math.floor((left+right)/2)
        if(calculate(piles,h,mid)){
            right=mid
        }else{
            left= mid+1
        }
    }
    return left
};
function calculate(piles,h,mid){
    let ans=0
    for(let pile of piles){
        ans+=Math.floor(pile/mid)
        let rest= pile%mid
        if(rest>0){
            ans++
        }
    }
    return ans<=h
}