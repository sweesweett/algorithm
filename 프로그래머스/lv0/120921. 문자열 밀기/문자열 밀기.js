function solution(A, B) {
    let arr=[]
    let result=''
    if(A===B)return 0
    if(A.length!==B.length)return -1
    for(let i =0; i<B.length;i++){
        if(A[0]===B[i]){
            arr.push(i)
        }
    }
    if(arr.length===1){
         for(let i = 0 ; i<A.length; i++){
        result+=A[i-arr[0]>=0?i-arr[0]:A.length+(i-arr[0])]
    }
        return result!==B?-1:arr[0]
    }else{
       for(let k =0; k<arr.length;k++){
              for(let i = 0 ; i<A.length; i++){
        result+=A[i-arr[k]>=0?i-arr[k]:A.length+(i-arr[k])]}
           if(result===B) return arr[k]
           result=''
       }
      return -1  
    }

}