/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map= new Map()
    const answer=[]
    nums.forEach(num=>{
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }

    })
    map.forEach((value,key)=>{
        if(value>nums.length/3){
            answer.push(key)
        }
    })
    return answer
};