function solution(my_string) {
    let words = {}
    for (let i = 0; i<my_string.length;i++){
        words[my_string[i]]=1
    }
    return Object.keys(words).join('')
    
}