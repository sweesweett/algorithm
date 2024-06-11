/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
 let map= new Map()
 let max=0
    const backtracking=(i,bit)=>{
      if(bit){
        map.set(bit,(map.get(bit)??0)+1)
        max=Math.max(bit,max)
      }
      
      if(i>=nums.length){
        return;
      }
      let tmpArr=[]
      for(let j=i;j<nums.length;j++){
        if(bit===undefined){
          backtracking(j+1,nums[j])
        }else{
           backtracking(j+1,bit|nums[j])
        }
         
      }
     

    }
    backtracking(0)
    return map.get(max)
}