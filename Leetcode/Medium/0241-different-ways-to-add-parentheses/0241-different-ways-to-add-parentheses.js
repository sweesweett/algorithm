/**
 * @param {string} expression
 * @return {number[]}
 */

const calculate=(val,num1,num2)=>{
    
    switch(val){
        case '-':
        return num1-num2
        case '+':
        return num1+num2
        case '*':
        return num1*num2

    }



}
const seperateStr=(str)=>{
    let set= new Set(['-','+','*'])
    let arr=[]
    let value=''
    for(let val of str){
        if(set.has(val)){
            arr.push(Number(value),val)
            value=''
            continue
        }
        value+=val
    }
    if(value){
        arr.push(Number(value))
    }
    return arr
}
const diffWaysToCompute = (expression) => {
    const set = new Set(['-', '+', '*']);
    let arr= seperateStr(expression)

    const recursion = (arr) => {
        if (arr.length===1) {
            return [arr.at(-1)];
        }

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (set.has(arr[i])) {
                const left = recursion(arr.slice(0, i));
                const right = recursion(arr.slice(i + 1));

                for (const l of left) {
                    for (const r of right) {
                        result.push(calculate(arr[i], l, r));
                    }
                }
            }
        }

        return result;
    };

    return recursion(arr);
};