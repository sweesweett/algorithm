var smallestDivisor = function(nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);
    
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);
        let val= nums.reduce((a, b) => a + Math.ceil(b / mid), 0);
        
        if (threshold < val){
            left = mid + 1;
        }else{
            right = mid-1;
        }
    }
    
    return left;
};