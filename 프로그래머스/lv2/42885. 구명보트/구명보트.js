function solution(people, limit) {
  let arr=[...people]
    arr.sort((a,b)=>a-b)
let answer=0
let left =0;
let right=arr.length-1
  while(true){
      if(right===left){
          answer+=1
          return answer
      }
        if(right<left){
            return answer
        }
      if(arr[left]+arr[right]>limit){
          answer+=1
          right-=1
      }else{
          answer+=1
          right-=1
          left+=1
      }
  }

    return answer
}