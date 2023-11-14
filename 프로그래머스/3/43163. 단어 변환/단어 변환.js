function solution(begin, target, words) {
    let min=words.length
    let set= new Set(words)
    if(!set.has(target)){
        return 0
    }
  const dfs=(word,total)=>{
      if(total>min){
          return;
      }
      if(word===target){
          min= Math.min(min,total)
          return;
      }
      if(total===words.length-1){
          return;
      }
      for(let i=0;i<words.length;i++){
          if(words[i]===word){
              continue
          }
          let count=0
          for(let j=0;j<words[i].length;j++){
              if(word[j]!==words[i][j]){
                  count++
              }
          }
          if(count===1){
              dfs(words[i],total+1)
          }
      }

  }
  dfs(begin,0)
 
 return min
}