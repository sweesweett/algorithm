
var FrontMiddleBackQueue = function() {
    this.queue=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let middle= Math.floor(this.queue.length/2)
    this.queue.splice(middle,0,val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
      let pop=this.queue.shift()
    return pop?pop:-1
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {

    let middle= Math.ceil(this.queue.length/2)-1
     let pop=this.queue.splice(middle,1)
    return pop.length?pop:-1
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    let pop=this.queue.pop()
    return pop?pop:-1
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */