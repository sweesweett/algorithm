/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const deleteSharp=(str)=>{
        let stack=[]
       for(let val of str){

        if(val==='#'){
            stack.pop()
        }else{
            stack.push(val)
        }
      
      }
       return stack.join('')  
    }
    

    return deleteSharp(s)===deleteSharp(t)?true:false

    
};