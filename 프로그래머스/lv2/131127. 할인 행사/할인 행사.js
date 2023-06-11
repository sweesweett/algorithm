function solution(want, number, discount) {
   let obj={}
   
   let arr=[...number]
    for(let i=0;i<want.length;i++){
       obj[want[i]]=i
   }
   for(let i=0;i<10;i++){
       if(obj[discount[i]]!==undefined){
            arr[obj[discount[i]]]-=1
       }
      
   }
    let answer=arr.join('')==='0'.repeat(want.length)||0

    for(let i=10;i<discount.length;i++){

         if(arr.join('')==='0'.repeat(arr.length)){
          answer++   
         }
        if(discount[i-10]!==discount[i]){
     
                if( arr[obj[discount[i]]]!==undefined){
                     arr[obj[discount[i]]]-=1
                }
                if(arr[obj[discount[i-10]]]!==undefined){
                   arr[obj[discount[i-10]]]+=1 
                }

            
        }
   
    }
    return answer
}