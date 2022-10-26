function solution(numbers, k) {
 let num=1
 let kk = 0
  while(num!==k){
      if(kk===numbers.length-1){
          kk=1
      }else if(kk===numbers.length-2){
          kk=0
      }else{
          kk+=2
          
      }
      num++
      
      
      
  }
   return numbers[kk]
}