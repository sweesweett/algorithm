
var MyCalendar = function() {
    this.set= new Set()

};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
 
    for(let val of this.set){
        let [l,r]= val
        if (end > l && start <r) return false;
    }
    this.set.add([start,end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */