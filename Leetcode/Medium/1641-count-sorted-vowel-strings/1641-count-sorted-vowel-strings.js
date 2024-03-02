/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let arr= new Array(n+1).fill(0)
    arr[1]=5
    let arr2=[1,1,1,1,1]
    for(let i=2;i<=n;i++){
      let total=1
      for(let j=0;j<arr2.length;j++){
        if(j===0){
         continue
        }
        arr2[j]+=arr2[j-1]
        total+=arr2[j]
      }
      arr[i]=total
    }
    return arr[n]
};