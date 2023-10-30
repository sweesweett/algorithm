function solution(expression) {
    let arr=[]
    let num=''
    let set= new Set()
    for(let val of expression){
        if(val==='+'||val==='-'||val==='*'){
            set.add(val)
            arr.push(Number(num),val)
            num=''
        }else{
            num+=val
        }
    }
    if(num!==''){
      arr.push(Number(num))  
    }
    let max=0
    getValue([...arr],new Set())
    return max
    function getValue (tmpArr,newSet){
        if(newSet.size===set.size||tmpArr.length===1){

            max=Math.max(max,Math.abs(tmpArr[0]))
            return 
        }
        for(let val of set){
            if(newSet.has(val)){
               continue
            }
            let newArr=[]
            for(let i=0;i<tmpArr.length;i++){
                if(tmpArr[i]===val){
                    let num=getNum(val,newArr.pop(),tmpArr[i+1])
                    newArr.push(num)
                    i++

                }else{
                    newArr.push(tmpArr[i])
                }
            }
            newSet.add(val)
            getValue(newArr,newSet)
            newSet.delete(val)
        }
        
    }


}
       function getNum (ex,num1,num2){
        switch(ex){
            case '+':
                return num1+num2
            case '-':
                return num1-num2
            default:
               return num1*num2
        }
        
    }