/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    arr=[0,1]
   function dfs(n){
       if(n===0){
           return 0
       }
       if(n===1){
           return 1
       }
       if(arr[n]!==undefined){
           return arr[n]
       }else{
           arr[n]=dfs(n-1)+dfs(n-2)
           return arr[n]
       }
       
   }
    return dfs(n)
};