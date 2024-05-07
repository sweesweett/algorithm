/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let set= new Set(s.split(''))
    let ans=[]
    getPalindromeArr(0,[],s)
    return ans

  function getPalindromeArr(start,arr,str){
    let s=''
    if(start===str.length){
      ans.push([...arr])
      return
    }
    for(let i=start;i<str.length;i++){
        s+=str[i]
        if(isPalindrome(s)){
           arr.push(s)
           getPalindromeArr(i+1,arr,str)
           arr.pop()
        }
    }
} 
  function isPalindrome(str){
    if(set.has(str)){
      return true
    }
    let left=0
    let right=str.length-1
    while(left<right){
      if(str[left]!==str[right]){
        return false
      }
      left++
      right--
    }
    set.add(str)
    return true
   }

};

