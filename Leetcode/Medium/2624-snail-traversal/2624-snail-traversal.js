/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if(rowsCount*colsCount!==this.length){
    return []
  }
  let num;
 let arr=Array.from(Array(rowsCount),()=>new Array(0))
 for(let i=0;i<this.length;i++){
   if(Math.trunc(i/rowsCount)%2===1){
    arr[num].push(this[i]) 
    num--
   }else{
     arr[i%rowsCount].push(this[i]) 
    if(i%rowsCount===rowsCount-1){
      num=rowsCount-1
    }
   }
     


 }
  return arr
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */