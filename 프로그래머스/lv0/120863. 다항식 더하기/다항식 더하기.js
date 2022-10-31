function solution(polynomial) {
   let arr=polynomial.split(' + ')
   let x= 0
   let a= 0
   for(let i of arr){
       if(i==='x'){
           x+=1
       }else if(i.includes('x')){
           x+=Number(i.slice(0,i.length-1))
       }else {
           a+=Number(i)
       }
   }
    if(x===0){    
        return `${a}`
    }else if(x===1 && a>0){
       return  `x + ${a}`
    }else if(x===1){
        return 'x'
    }
    else if(a===0){
        return `${x}x`
    }
    else{
         return `${x}x + ${a}`
    }
   
}