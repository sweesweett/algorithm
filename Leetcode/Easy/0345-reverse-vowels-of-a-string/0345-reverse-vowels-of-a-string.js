function reverseVowels(s) {
    let start = 0;
    let arr=[...s]
    let end = s.length - 1;
    let dd = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
    while(start<end){
        if(!dd.has(arr[start])){
            start++
        }
        if(!dd.has(arr[end])){
            end--
        }
        if(dd.has(arr[start])&&dd.has(arr[end])){
            let tmp=arr[start]
            arr[start]=arr[end]
            arr[end]=tmp
            start++
            end--
        }


    }
    return arr.join('')
};