/**
 * @param {number[]} nums
 */
 //this is not algorithm problem, this problem in javascript category
var ArrayWrapper = function(nums) {
    this.arr=nums
};

ArrayWrapper.prototype.valueOf = function() {
    let ddd=(arr)=>{
        let num=0
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
               num+=ddd(arr[i])  
            }else{
                num+=arr[i]
            }
        }
        
        return num
        
    }
    return ddd(this.arr)
}

ArrayWrapper.prototype.toString = function() {
    let ddd=(arr)=>{
        let str='['
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                console.log('here')
               str+=ddd(arr[i])  
            }else{
                str+=arr[i]
            }
             if(i!==arr.length-1){
                    str+=','
            }
        }
        str+=']'
        return str
        
    }
    return ddd(this.arr)
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */