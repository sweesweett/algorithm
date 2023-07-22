/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  const map = new Map()
  let answer=[]
  let set = new Set()
  let last=''
  for(let val of chars){
    if(map.has(val)){
      map.set(val,map.get(val)+1)
    }else{
      if(last!==''){
        set.add([last,map.get(last)])
        map.delete(last)
      }
      map.set(val,1)
      last=val
    }
  }
  if(last&&map.has(last)){
    set.add([last,map.get(last)])
  }
  set.forEach(([key,value])=>{
      let str=key
    if(value>1){
      str+=value
    }
    answer.push(...str.split(''))

  })

  for(let i=0;i<answer.length;i++){
    chars[i]=answer[i]
  }

 return answer.length
};