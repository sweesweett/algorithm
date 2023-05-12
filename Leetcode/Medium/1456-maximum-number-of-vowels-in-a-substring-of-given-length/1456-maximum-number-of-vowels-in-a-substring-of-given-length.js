/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let set=new Set(['a','e','i','o','u'])
    let arr=[...s]
    let sum=arr.slice(0,k).reduce((a,b)=>a+Number(set.has(b)),0)
    let max=sum
    
    if(sum===k){
        return k
    }
    for(let i =k;i<arr.length;i++){
        let dd= sum+=Number(set.has(arr[i]))-Number(set.has(arr[i-k]))
        if(dd===k){
            return k
        }else{
            max=Math.max(dd,max)
            sum=dd
        }
    }
    return max
};