/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let set=new Set(['a','e','i','o','u','A', 'E', 'I', 'O', 'U'])  
  let left=0
  let right=0
  for(let i=0;i<Math.round(s.length/2);i++){
      if(set.has(s[i])){
          left+=1
      }
      if(set.has(s[s.length-1-i])){
          right+=1
      }

  }
  return left===right
};