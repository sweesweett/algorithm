/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    if(input.length===1){
        return 0
    }
    let arr= input.replaceAll('\t','/').split('\n')
    let maxLength=0
    let length=0
    let num=0
    let stack=[]
    for(let i =0;i<arr.length;i++){
        if(!arr[i].startsWith('/')&&num===0){
            stack.push(arr[i])
            length+=arr[i].length
            num++
        }
        else if(arr[i].slice(0,num)==='/'.repeat(num)&&arr.at(num)!=='/'&&num>0){
            let val=arr[i].slice(num-1)
            if(i===arr.length-1&&!arr[i].includes('.')){
                return maxLength
            }
            stack.push(val)
            length+=val.length
            num++
          
        }else{
            if(stack.at(-1).includes('.')){
                maxLength=Math.max(maxLength,length)
            }
             length-=stack.pop().length
             i--
             num-- 
        }

    }
    return Math.max(maxLength,length)
    
};