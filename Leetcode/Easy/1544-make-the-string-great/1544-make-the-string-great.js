/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    //아스키코드로 해야겠다.
    //97-65=32
    let stack=[s[0]]
    for(let i=1;i<s.length;i++){
   
        if(!stack.length){
            stack.push(s[i])
        }else{
            let left= stack[stack.length-1].charCodeAt()
            let right=s[i].charCodeAt()
             if(Math.abs(left-right)===32){
                stack.pop()
            }else{
                stack.push(s[i])
            }

        }
       
    }
    return stack.join('')
};