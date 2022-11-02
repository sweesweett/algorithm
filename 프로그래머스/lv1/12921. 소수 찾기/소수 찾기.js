function solution(n) {
  // TODO: 여기에 코드를 작성합니다.
  let result=3
  if(n===2){
    return 1
  }
if(n===3){
    return 2
}
if(n===5){
    return 3
}
function toCheck(item){
    for(let i=3;i<=item**0.5;i=i+2){
        if(item%i===0){
            return 0
        }
    }
    return 1
}
  for(let i =7;i<=n; i=i+2 ){
    result+=toCheck(i)
     
  }
  return result
}