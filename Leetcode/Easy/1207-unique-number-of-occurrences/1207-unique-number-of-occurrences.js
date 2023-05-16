/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   let newArr=[]
   let obj={}
   for(let val of arr){
      if(obj[val]){
         obj[val]+=1
      }else{
         obj[val]=1
      }
   }
   for(let key in obj){
      if(newArr[obj[key]]){
         return false
      }else{
         newArr[obj[key]]=key
      }
   }
   return true
};