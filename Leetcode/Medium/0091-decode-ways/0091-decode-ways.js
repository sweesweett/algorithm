/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if(!s.length||s[0]==='0'){
    return 0
  }
  if(s.length===1){
    return 1
  }
  let arr= new Array(s.length+1).fill(0)
  arr[0]=1
  arr[1]=1
  for(let i=2;i<=s.length;i++){
    let num1=Number(s[i-1])
    let num2=Number(s.slice(i-2,i))
    if(num1!==0){
      arr[i]+=arr[i-1]
    }
    if(num2>=10&&num2<27){
      arr[i]+=arr[i-2]
    }
  }
  return arr.at(-1)
    
}