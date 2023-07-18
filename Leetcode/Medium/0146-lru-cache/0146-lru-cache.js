/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = new Map();
    this.capacity = capacity;

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cap.has(key)){
        return -1
    }
    let value= this.cap.get(key)
    this.cap.delete(key)
    this.cap.set(key,value)
    return this.cap.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cap.has(key)){
        this.cap.delete(key)
    }
    this.cap.set(key, value);
    if (this.cap.size > this.capacity) {
      this.cap.delete(this.cap.keys().next().value); 
    }
  };
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */