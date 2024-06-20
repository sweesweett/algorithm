/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.arr=[]
  this.idx=0
  const backtracking=(idx,length,str)=>{
    if(idx>=characters.length||length===combinationLength){
        this.arr.push(str)
        return
    }
    for(let i=idx+1;i<characters.length;i++){
      backtracking(i,length+1,str+characters[i])
    }
  }
  backtracking(-1,0,'')
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.arr[this.idx++]
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return !!this.arr[this.idx]
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */