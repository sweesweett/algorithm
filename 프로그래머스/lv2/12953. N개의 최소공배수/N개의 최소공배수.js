function solution(arr) {
let answer=arr[0]
    for(let i=1;i<arr.length;i++){
        answer=dd(answer,arr[i])
    }
   return answer
}
function dd(num1,num2){
    let p=num1
    let q=num2
    let tmp
   while(true){
         if(q%p===0){
            return num1*num2/p
        }
        tmp=q%p
        q=p
        p=tmp
     
       
       
   }
}