/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let ans=[]
    let backtracking=(i,str)=>{
      if(i>=s.length){
        ans.push(str)
        return
      }
      if(!Number.isNaN(Number(s[i]))){
        backtracking(i+1,str+s[i])
      }else{
        backtracking(i+1,str+s[i].toUpperCase())
        backtracking(i+1,str+s[i].toLowerCase())
      }

    }
    backtracking(0,'')
    return ans
};