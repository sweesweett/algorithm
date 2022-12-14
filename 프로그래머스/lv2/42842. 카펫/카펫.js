function solution(brown, yellow) {
let total = brown+yellow
let arr=[]
    for(let i=3;i<=total**0.5;i++){
        if(total%i===0){
          if((i-2)*(total/i-2)===yellow){
             arr=[i,total/i]
          }
        
        }
    }
    if(arr[0]<arr[1]){
        return[arr[1],arr[0]]
    }
    return arr
}
