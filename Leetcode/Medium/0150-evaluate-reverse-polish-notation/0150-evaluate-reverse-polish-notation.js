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
        let pop2=stack.pop()
        switch(value){
            case '+':
                stack.push(pop+pop2)
                break
            case '-':
                stack.push(pop2-pop)
                break
            case '*':
                stack.push(pop2*pop)
                break
            case '/':
                stack.push(Math.trunc(pop2/pop))     

        }
    }