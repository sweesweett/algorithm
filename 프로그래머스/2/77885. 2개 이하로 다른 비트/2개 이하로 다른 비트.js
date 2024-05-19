function solution(numbers) {
    let ans=[]
    let toBinary=numbers.map((el)=>+'0'+el.toString(2))
    for(let number of toBinary){
      let count=0
      let min=Infinity
      let arr=number.split('').map(Number)
      for(let i=arr.length-1;i>=0;i--){
          if(count>0&&count<=2){
              min=Math.min(parseInt(arr.join(''),2),min)
          }else if(count>2){
              break
          }
          if(arr[i]===0&&arr[i-1]===1){
              arr[i]=1
              count++
          }else if(arr[i]===1&&arr[i-1]===0){
              arr[i]=0
              arr[i-1]=1
              count+=2
          }else if(arr[i]===0&&arr[i-1]===0){
              arr[i]=1
              count++
          }
          else if(i===0&&arr[i]===0){
              arr[i]=1
              count++
          }
      }
        ans.push(min)
    
    }
    return ans
}