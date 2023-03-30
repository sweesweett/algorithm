function solution(s, skip, index) {
    let newWords=[]
    let alpha='abcdefghijklmnopqrstuvwxyz'
for(let i =0;i<skip.length;i++){
           alpha=alpha.replace(skip[i],'') 

}
for(let i =0; i<s.length;i++){
        const idx = (alpha.indexOf(s[i])+index)%(26-skip.length)
                    newWords.push(alpha[idx])
}
    return newWords.join('')
}