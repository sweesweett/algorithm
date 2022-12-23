function solution(t, p) {
   let length= p.length
   let count=0

   for(let i =0;i<t.length-length+1;i ++){
       if(Number(p)>=Number(t.slice(i,i+length))){
          count++
          }
       
   }
    return count
}   