/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    let obj={}
    for(let i=0;i<messages.length;i++){
        let arr= messages[i].split(' ')
        if(obj[senders[i]]){
            obj[senders[i]]+= arr.length
        }else{
             obj[senders[i]]= arr.length
        }
    }
    let maxKey=''
    let maxVal=0
   for(let key in obj){
       if(maxVal<obj[key]){
           maxKey=key
           maxVal=obj[key]
       }else if(maxVal===obj[key]&&key>maxKey){
            maxKey=key
       }
   }
   return maxKey
};