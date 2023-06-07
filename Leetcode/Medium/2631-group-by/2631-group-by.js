/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let obj={}
    for(let val of this ){
      let res = fn(val)
      if(obj[res]){
        obj[res].push(val)
      }else{
        obj[res]=[val]
      }
    }
      return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */