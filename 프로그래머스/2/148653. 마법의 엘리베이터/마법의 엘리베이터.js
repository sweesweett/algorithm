function solution(storey) {
  let str=String(storey).split('').map(Number)
  let count=0
  for(let i=str.length-1;i>=0;i--){
      let div=Math.floor(str[i]/10)
      let rest=str[i]%10
      if(rest>5){
          div+=1
          count+=10-rest
      }else if(rest===5&&i>=1){
          if(str[i-1]>=5){
              div+=1
              count+=10-rest
          }else{
              count+=rest
          }
          
          
      }else{
          count+=rest
      }
      if(i===0){
          count+=div
          
      }else{
          str[i-1]+=div
          str[i]=0
          
      }
  }
    console.log(str)
    return count
}
