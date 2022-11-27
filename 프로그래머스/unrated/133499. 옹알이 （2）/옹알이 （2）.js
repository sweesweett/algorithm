function solution(babbling) {
    let arr=['aya','ye','woo','ma']
     let str= babbling.join(',')
    for(let i =0;i<arr.length;i++){
        str=str.replaceAll(arr[i],i+1)
    }
        str=str.split(',')

       for(let i =0; i<str.length;i++){
           let isConq = true
           for(let j=0;j<str[i].length-1;j++){

               if(str[i][j]===str[i][j+1]){
                    isConq=false
                   break
               }
           }
           if(!isConq){
               str[i]='x'
           }
           
       }
    return str.filter(el=>!isNaN(Number(el))).length
}