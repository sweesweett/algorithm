function solution(babbling) {
   let str= babbling.join(',')
   str=str.replaceAll(/(aya|ye|woo|ma)/g,'')
    let num=str.split(',').filter(el=>el!=='').length
    return babbling.length - num
}