/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.val=value
    this.k=k
    this.arr=[]
    this.obj={}
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    this.arr.push(num)
    if(this.obj[num]){
        this.obj[num]+=1
    }else{
        this.obj[num]=1
    }
    if(this.arr.length<this.k){
        return false
    }else{
        if(this.arr.length>this.k){
            this.obj[this.arr.shift()]-=1
        }
        if(this.obj[this.val]===this.k){
            return true
        }else{
            return false
        }

    }
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */