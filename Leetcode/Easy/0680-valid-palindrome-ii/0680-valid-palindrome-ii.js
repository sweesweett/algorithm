/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(s.length<=2){
        return true
    }
   let left=0
   let arr=s.split('')
   let right=s.length-1
   let count=0
   while(left<=Math.floor(s.length/2)-count){
       if(count>1){
           break
       }
       if(arr[right]!==arr[left]){
           left++
           count++
           
       }else{
           left++
           right--
       }

   }
   left=0
   right=s.length-1
   let count2=0
      while(right>=Math.floor(s.length/2)-count){
          if(count2>1){
              break
          }
       if(arr[right]!==arr[left]){
           right--
           count2++
           
       }else{
           left++
           right--
       }

   }
   if(s.length===3&&Math.min(count2,count)>=1){
       return false
   }
    return Math.min(count2,count)>1?false:true
   
};
//1 , 12