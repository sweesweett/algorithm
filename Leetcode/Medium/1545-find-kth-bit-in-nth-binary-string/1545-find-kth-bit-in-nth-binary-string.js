 function invertStr(str){
     let newStr=''
     for(let i= str.length-1;i>=0;i--){
         if(str[i]==='0'){
             newStr+='1'
         }else{
             newStr+='0'
         }
     }
     return str+'1'+newStr
 }

var findKthBit = function(n, k) {
    let arr=["","0","011","0111001","011100110110001"]
    const recursion=(n)=>{
        if(arr[n]){
            return arr[n]
        }
        let val=recursion(n-1)
      
        arr[n]=invertStr(val)
        return arr[n]
    }
    return recursion(n)[k-1]

    
};
