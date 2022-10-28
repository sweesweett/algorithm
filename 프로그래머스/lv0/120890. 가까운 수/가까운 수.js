function solution(array, n) {
    let min=Infinity
    for(let i =0; i<array.length;i++){
        if(Math.abs(array[i]-n)<Math.abs(min-n)){

            min=array[i]
        }else if (Math.abs(array[i]-n)===Math.abs(min-n)){
            if(min>array[i]){
                min=array[i]
            }
            
        }
    }
    return min
}