function solution(arr) {
    let queue=[[arr.length,0,0]]
    let answer=new Array(2).fill(0)
    let tmp=new Array(2).fill(0)
    let [newArr,total]=makeNew(arr)
    if(newArr[0]===-1){
        return total
    }
    total[newArr[0]]+=1
    return total

}
function makeNew(arr){
    let newArr=[...arr]
    let total=new Array(2).fill(0)
    while(newArr[0].length>1){
        let arr2=[]
    for(let i=0;i<newArr.length;i+=2){
        let tmpArr=[]
        for(let j=0;j<newArr.length;j+=2){
            tmpArr.push(partitioningArea([[newArr[i][j],newArr[i][j+1]],[newArr[i+1][j],newArr[i+1][j+1]]],total))
        }
        arr2.push(tmpArr)
    }
       newArr=arr2
    }    
    return [...newArr,total]
        
}
function partitioningArea(arr,total){
    let last;
    let isUnited=true
    let totalArr=new Array(2).fill(0)
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            if(arr[i][j]===-1){
                isUnited=false
                continue
            }
            totalArr[arr[i][j]]+=1
            if(last===undefined){
                last=arr[i][j]
            }else{
                if(last!==arr[i][j]){
                    isUnited=false
                }
            }
            arr[i][j]=-1
        }
    }

    if(isUnited){
        return last
    }else{
        total[0]+=totalArr[0]
        total[1]+=totalArr[1]
        return -1
    }
}