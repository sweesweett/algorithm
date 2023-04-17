/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums= nums
    
    let arr= Array(nums.length).fill(0)
    arr[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        arr[i]=nums[i]+arr[i-1]
    }
    this.arr=arr
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  if(left===0){
      return this.arr[right]
  }

  return this.arr[right]-this.arr[left-1]
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */