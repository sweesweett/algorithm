/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans=[]
    const backtracking=(i,newArr)=>{
      ans.push([...newArr])
      if(i>=nums.length){
        return;
      }
      let tmpArr=[]
      for(let j=i;j<nums.length;j++){
        newArr.push(nums[j])
         backtracking(j+1,newArr)
         newArr.pop()
      }
     

    }
    backtracking(0,[])
    return ans
};