/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let max=1
    let map = new Map()
    let count=0
    for(let val of nums){
        if(map.has(val)){
          map.set(val,map.get(val)+1||1)
          max= Math.max(map.get(val),max)
        }else{
          map.set(val,1)
        }

    }
    map.forEach((value)=>{
      if(value===max){
        count++
      }

    })
    return count*max
};