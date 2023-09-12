/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b)=>a-b)
    let ans=[]
    let ddd=[nums[0]]
    for(let i=1;i<nums.length;i++){

        ddd.push(nums[i]+ddd.at(-1))
    }

    for(let query of queries){
        let l=0
        let r=ddd.length-1
        while(l<=r){
            let m=Math.floor(l+(r-l)/2)
            if(ddd[m]>query){
                r=m-1
            }else{
                l=m+1
            }
        }
            ans.push(l)

    }               
    if(!ans.length){
        return [0]
    }
    return ans
};