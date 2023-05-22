/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900
    }
    let stack=[]
    for(let val of s){
       if(!stack.length){
           stack.push(val)
            continue
       }
       let tail=stack[stack.length-1]
       if(obj[tail+val]){

           stack.push(stack.pop()+val)
       }else{
           stack.push(val)
       }
       

    }
      return stack.reduce((a,b)=>a+obj[b],0)
}