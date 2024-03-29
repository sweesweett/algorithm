//자바스크립트 문제

var TimeLimitedCache = function() {
    this.obj={}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let dd=true
    if(!this.obj[key]){
        dd=false
         this.obj[key]={value,time:null}
    }else{
         this.obj[key].value=value
    }
   
    if(this.obj[key].time){
        clearTimeout(this.obj[key].time)
    }   
        this.obj[key].time=setTimeout(()=>{
        delete this.obj[key]

    },duration)

 
    return dd
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.obj[key]){
        return this.obj[key].value
    }else{
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.obj).length
    
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
