/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let dd=[0]
    for(let i =0;i<nums.length-1;i++){
        let pp=nums[i+1]-nums[i]
        let qq=dd[dd.length-1]
      if(qq>0){
          if(pp<0){
              return false
          }

      }else if(qq<0){
          if(pp>0){
              return false
          }

      }
     dd.push(pp)
        
    }

    if(dd.filter(el=>el>=0).length===nums.length){
        return true
    }
    if(dd.filter(el=>el<=0).length===nums.length){
        return true
    }
    return false
};