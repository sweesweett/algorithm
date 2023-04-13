/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newWord=''
    length = Math.max(word1.length,word2.length)*2
    for(let i =0;i<length;i++){
        if(i%2===0){
            if(word1[Math.floor(i/2)]){
             newWord+=word1[Math.floor(i/2)]
            }
        }
        else{
            if(word2[Math.floor(i/2)]){
              newWord+=word2[Math.floor(i/2)]
            }
        }
      

    }
      return newWord
};