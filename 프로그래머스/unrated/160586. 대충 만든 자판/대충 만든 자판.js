function solution(keymap, targets) {
    //65,90,charCodeAt
    const arr= new Array(26).fill(Infinity)
    for(let i=0;i<keymap.length;i++){
        for(let j=0;j<keymap[i].length;j++){
            const code= keymap[i][j].charCodeAt()-65
            if(arr[code]>j+1){
                arr[code]=j+1
            }
        }
    }
    const answer=[]
    for(let val of targets){
        let sum=0
        let isBreak=false
        for(let v of val){
            const code=v.charCodeAt()-65
            if(arr[code]===Infinity){
                answer.push(-1)
                isBreak=true
                break
            }
            sum+=arr[code]
        }
        if(isBreak){
            continue
        }
        answer.push(sum)
    }
    return answer
}