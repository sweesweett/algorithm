function solution(data, col, row_begin, row_end) {
   data.sort((a,b)=>{
       if(a[col-1]===b[col-1]){
           return b[0]-a[0]
       }
       return a[col-1]-b[col-1]
   })
  return data.map((arr,i)=>arr.reduce((a,b)=>a+b%(i+1),0))
                  .slice(row_begin-1,row_end).reduce((a,b)=>a^b)  
}