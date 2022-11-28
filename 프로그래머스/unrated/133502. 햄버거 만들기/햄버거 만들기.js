function solution(ingredient) {
   let answer=0
    let arr=[...ingredient]
    let dd= ingredient.length
    let i =0
    let memo=-1
    while(true){
             if(i===arr.length-3||arr.length-3<0){
                return answer
        }
            if(arr[i]===1&&arr[i+1]===2&&arr[i+2]===3&&arr[i+3]===1){
                answer+=1
                arr.splice(i,4)
                i=memo
                memo=-1
            }else{
                if(arr[i]===1||memo<0){
                    memo=i
                }
                i++
            }
     
       
       
        
        

        
    }
    return answer;
}