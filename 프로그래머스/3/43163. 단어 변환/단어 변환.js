function solution(begin, target, words) {
  let min=words.length+1
    let set= new Set(words)
    if(!set.has(target)){
        return 0
    }
  const dfs=(word,total,set)=>{
      if(total>min){
          return;
      }
      if(word===target){
        min= Math.min(min,total)
        return;
      } 
      if(total===words.length){
          return;
      }
  
      for(let i=0;i<words.length;i++){
          if(set.has(words[i])){
              continue
          }
          let count=0
          for(let j=0;j<words[i].length;j++){
              if(word[j]!==words[i][j]){
                  count++
              }
          }
          if(count===1){
              set.add(words[i])
              dfs(words[i],total+1,set)

              set.delete(words[i])
          }
      }

  }
  dfs(begin,0,new Set([begin]))
if(min===words.length+1){
     return 0
 }

 return min
}