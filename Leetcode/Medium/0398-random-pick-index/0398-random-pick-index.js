/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.obj={}
    nums.forEach((el,idx)=>{
        if(this.obj[el]){
            this.obj[el].push(idx)
        }
        else{
            this.obj[el]=[idx]
        }
    })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let length= this.obj[target].length
    return this.obj[target][Math.floor(Math.random()*length)]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */