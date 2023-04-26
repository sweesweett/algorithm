/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   let obj={}
   
   for(let i=0;i<magazine.length;i++){
      if(obj[magazine[i]]){
          obj[magazine[i]]+=1
      }else{
          obj[magazine[i]]=1
      }

   }
   let total=magazine.length
   for(let i =0;i<ransomNote.length;i++){
      if(obj[ransomNote[i]]>0){
          obj[ransomNote[i]]-=1
          total-=1
      }
   }
   return total+ransomNote.length===magazine.length?true:false
};