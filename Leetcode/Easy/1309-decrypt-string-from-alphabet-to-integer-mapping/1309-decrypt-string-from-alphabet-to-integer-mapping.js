/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let num=96
    let i =0
    let str=''
    while(i<s.length){
      if(s[i+2]==='#'){
        str+=String.fromCodePoint(Number(s.slice(i,i+2))+num)
        i+=3
      }else{
      str+=String.fromCodePoint(Number(s[i])+num)
      i+=1

      }
      

    }

  return str
};
