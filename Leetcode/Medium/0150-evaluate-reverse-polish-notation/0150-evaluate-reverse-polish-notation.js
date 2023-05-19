/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[]
    for(let val of tokens){
        if(isNaN(Number(val))){
           calculate(val,stack)
            
        }else{
            stack.push(Number(val))
        }
    }
    return stack[0]
   
};
 function calculate(value,stack){
        let pop=stack.pop()
        switch(value){
            case '+':
                stack.push(pop+stack.pop())
                break
            case '-':
                stack.push(stack.pop()-pop)
                break
            case '*':
                stack.push(stack.pop()*pop)
                break
            case '/':
                let pop2=stack.pop()
                if(pop2%pop&&pop2/pop<0){
                    stack.push(Math.floor(pop2/pop)+1)
                }else{
                    stack.push(Math.floor(pop2/pop))
                }     

        }
    }