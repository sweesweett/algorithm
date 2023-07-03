/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map= new Map()
    nums.forEach((el)=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1)
        }else{
            map.set(el,1)
        }

    })
    let ans=[0,0]
    map.forEach((value,key)=>{
        if(value>ans[1]){
            ans[0]=key
            ans[1]=value
        }


    })
    return ans[0]
};