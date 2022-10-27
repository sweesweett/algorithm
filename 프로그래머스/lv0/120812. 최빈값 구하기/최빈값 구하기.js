function solution(array) {
  let obj = {}

  for(let i = 0; i<array.length;i++){
      if(array[i] in obj){
          obj[array[i]]+=1
      }else{
          obj[array[i]]=1
      }
  }
let max=array[0]   
for(let key in obj){
    if(obj[key]>obj[max]){
        max=Number(key)
    }
}
for(let key in obj){
    if(obj[max]===obj[key]&&max!==Number(key)){
        return -1
    }
}    
    return max
}