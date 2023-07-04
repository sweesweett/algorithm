function solution(numbers) {
    const map = new Map(); 
    const stack = [];
    let answer=new Array(numbers.length).fill(-1)
    numbers.forEach((el,idx)=>{
        while(stack.length&&numbers[stack.at(-1)] < el){
            answer[stack.pop()]=el
        }
        stack.push(idx)

    })
    return answer
  
}