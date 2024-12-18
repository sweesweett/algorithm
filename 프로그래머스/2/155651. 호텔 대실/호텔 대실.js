function solution(book_time) {
    let MAX_TIME=23*60+59
    let book=book_time.map(([a,b])=>{
        let left=a.split(':').map(Number)
        let right=b.split(':').map(Number)
        return [left[0]*60+left[1],right[0]*60+right[1]+10]
    })
    book.sort((a,b)=>{
        if(a[0]!==b[0]){
            return a[0]-b[0]
        }
            return (a[1]-a[0])-(b[0]-b[1])
    })
    let newArr=[]
    for(let i=0;i<book.length;i++){
        if(!newArr.length){
            newArr.push(book[i])
            continue
        }
        let [left,right]=book[i]
        let isValid=false
        for(let j=0;j<newArr.length;j++){
            let [start,end]=newArr[j]
            if(end>=MAX_TIME){
                continue
            }
            if(end>left){
                continue
            }
            newArr[j][1]=right
            isValid=true
            break
        }
        if(!isValid){
            newArr.push(book[i])
        }
    }
    return newArr.length
}