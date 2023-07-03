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
    map.forEach((value,key)=>{
        let plus= !map.has(key+1)?0:map.get(key+1)
        let minus=!map.has(key-1)?0:map.get(key-1)
        let dd= Math.max(plus,minus)
         if(dd>0){
             count=Math.max(dd+value,count)
        }
       
    })
    return count
  
  };