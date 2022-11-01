function solution(num, total) {
    let first = (total -num*(num+1)/2)/num +1
   let answer=[]
   for(let i= 0; i<num;i++){
       answer.push(first+i)
       
   }
    return answer
        
}