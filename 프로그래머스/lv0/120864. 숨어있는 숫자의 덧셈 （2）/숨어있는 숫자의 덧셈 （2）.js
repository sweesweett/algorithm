function solution(my_string) {
    let arr = my_string.replace(/[a-z]/gi,' ').split(' ')
    arr= arr.filter(el=>el!=='')
    if(arr.length===0){
        return 0
    }
    return arr.reduce((a,b)=>Number(a)+Number(b),0)
}