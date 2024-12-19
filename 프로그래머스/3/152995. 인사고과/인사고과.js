function solution(scores) {
    var answer = 0;
    let arr=Array.from({length:scores.length},(_,i)=>[...scores[i],i])
    arr.sort((a,b)=>{
        return (b[0]+b[1])-(a[0]+a[1])
    })
    let minus=0
    let rank=1
    let prev=null
    for(let i=0;i<arr.length;i++){
        let isValid=true
        for(let j=0;j<i;j++){
          if(arr[j][0]>arr[i][0]&&arr[j][1]>arr[i][1]){
              if(arr[i][2]===0){
                  return -1
              }
              isValid=false
              minus++
              break
          }  
        }
        if(!isValid){
            continue
        }
        if(prev===null){
            prev=arr[i][0]+arr[i][1]
        }
        if(prev!==arr[i][0]+arr[i][1]){
            rank=i+1-minus
        }
        if(arr[i][2]===0){
            return rank
        }
        
    }

}