function solution(nums) {
    let obj={}
    let half = nums.length/2
    for(let i =0;i<nums.length;i++){
        obj[nums[i]]=1
    }
    let bd=Object.keys(obj).length
    if(bd<=half){
        return bd
    }else{
        return half
    }
    
}