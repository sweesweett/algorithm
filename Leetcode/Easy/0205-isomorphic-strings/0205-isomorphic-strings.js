/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  if(s.length!==t.length){
    return false
  }
  let map = new Map()
  let map2= new Map()
  for(let i =0;i<s.length;i++){
    
   if(map.has(s[i])){
     if(map.get(s[i])!==t[i]){
       return false
     }
   }else{
     map.set(s[i],t[i])
   }
   if(map2.has(t[i])){
     if(map2.get(t[i])!==s[i]){
       return false
     }
   }else{
     map2.set(t[i],s[i])
   }
  }
   return true
};