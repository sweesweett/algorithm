function solution(p) {

    let map = new Map([['(',0],[')',0]])
    let ans=''
    let stack=[]
    for(let i=0;i<p.length;i++){
        if(stack.at(-1)+p[i]==='()'){
            let pop=stack.pop()
            map.set(pop,map.get(pop)-1)
        }else{
            map.set(p[i],map.get(p[i])+1)
            stack.push(p[i])

        }
        if(map.get('(')===map.get(')')){
       
            if(!stack.length){

                return  p.slice(0,i+1)+solution(p.slice(i+1))
            }else{

                return `(${solution(p.slice(i+1))})${backwards(p.slice(1,i))}`
           
            }
        }
    }
    return ans
    
}
function backwards(str){

  if(str===''){
     return ''
  }  
  let arr=str.split('')
  let obj={
      '(':')',
      ')':'('
  } 
  return arr.map(el=>obj[el]).join('')  
}

