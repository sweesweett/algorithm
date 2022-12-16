

function solution(arr1, arr2) {
    let p=0
    let arr=[]
    while(true){
        if(p===arr1.length){
            return arr
        }
        let arrr=[]
        for(let i=0;i<arr2[0].length;i++){
            let answer=0
            for(let j=0;j<arr2.length;j++){
                answer+=arr2[j][i]*arr1[p][j]
            }
            arrr.push(answer)
        }
        arr.push(arrr)
        p++
    }
       

    return answer;
}