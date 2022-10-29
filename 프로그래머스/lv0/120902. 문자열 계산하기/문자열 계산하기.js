function solution(my_string) {
   
    let arr=my_string.split(' ')
     let tmp=Number(arr[0])
    for(let i =0; i<arr.length;i++){
        if(arr[i]==='+'){
            tmp+= Number(arr[i+1])
        }else if(arr[i]==='-'){
            tmp-=Number(arr[i+1])
        }else{
            continue
        }
    }
    return tmp
}