function solution(phone_book) {
    if(phone_book.length===1){
        return false
    }
    phone_book.sort()
    for(let i=0;i<phone_book.length-1;i++){
        if(phone_book[i][0]!==phone_book[i+1][0]){
            continue
        }
        if(phone_book[i]===phone_book[i+1].slice(0,phone_book[i].length)){
            return false
        }
        
    }
    return true
}