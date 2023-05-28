/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.stack=[]
    this.forw=[]
    this.curr=homepage
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.stack.push(this.curr)
    this.curr=url
    this.forw=[]
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
     for(let i=1;i<=steps;i++){
          if(this.stack.length){
    this.forw.push(this.curr)
    this.curr=this.stack.pop()
          }
     }
    return this.curr
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for(let i=1;i<=steps;i++){
    if(this.forw.length){
    this.stack.push(this.curr)
    this.curr=this.forw.pop()
    }
    }
    return this.curr

};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */