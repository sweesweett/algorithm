function solution(data, col, row_begin, row_end) {
   data.sort((a,b)=>{
       if(a[col-1]===b[col-1]){
           return b[0]-a[0]
       }
       return a[col-1]-b[col-1]
   })
  let newData=data.map((arr,i)=>arr.reduce((a,b)=>a+b%(i+1),0))
  let ans;
  if(row_begin===row_end){
      return newData[row_begin-1]
  }  
  for(let i=row_begin-1;i<row_end;i++){
      if(ans===undefined){
          ans=newData[i]
          continue
      }
      ans=ans^newData[i]
  }  
    return ans
}