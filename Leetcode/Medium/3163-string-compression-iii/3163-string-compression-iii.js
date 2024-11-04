/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let num=0
    let prev=''
    let ans=''
    for(let i=0;i<=word.length;i++){
        if(i===word.length){
            ans+=num+prev
            break
        }
        
        if(!prev){
            num=1
            prev=word[i]
            continue
        }
        if(prev!==word[i]){
            ans+=num+prev
            prev=word[i]
            num=1
        }else{
            if(num===9){
                ans+=9+prev
                num=1
            }else{
                num++
            }
        }
    }
    return ans
};