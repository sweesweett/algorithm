function solution(numbers) {
 
    numbers.sort((a,b)=>{
        let aa=String(a)
        let bb =String(b)
        if(bb+aa>aa+bb){
            return 1
        }else{
            return -1
        }
    }
        
   )
    if(numbers[0]===0){
        return '0'
    }
   return numbers.join('')
}