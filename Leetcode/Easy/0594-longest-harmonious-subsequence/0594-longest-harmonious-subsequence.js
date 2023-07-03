/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
   
    let idx=0
    let count=0
    let map= new Map()
    nums.forEach(el=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1)
        }else{
            map.set(el,1)
        }
    })
    if(map.size===1){
        return 0
    }
    while(idx<nums.length){
         let start=nums[idx]
        let plus= !map.has(start+1)?0:map.get(start+1)
        let minus=!map.has(start-1)?0:map.get(start-1)
        let dd= Math.max(plus,minus)
        if(dd>0){
            dd+=map.get(start)
        }
        if(dd>count){
            count=dd
        }
        map.set(start,map.get(start)-1)
        idx++

    }
    return count
  
  };