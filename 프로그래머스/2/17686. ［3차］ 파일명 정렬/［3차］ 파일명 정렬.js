function solution(files) {
    let map=new Map()
    for(let value of files){
        let val=value.toLowerCase()
        let obj={
            head:'',
            number:'',
            tail:''}
        for(let i=0;i<val.length;i++){
            if(val[i]!==' '&&!Number.isNaN(Number(val[i]))){
                obj.number+=val[i]
            }else{
              if(!(obj.number&&obj.head)){
                obj.head+=val[i]
              }else{
                  obj.tail=val.slice(i)
                  break
              }
                
            }
        }
        obj.number=Number(obj.number)
        map.set(value,obj)
    }
  function compareSorting(a, b) {
        let mapA = map.get(a)
        let mapB = map.get(b)
        if (mapA.head !== mapB.head) {
            return mapA.head.localeCompare(mapB.head)
        }
        if (mapA.number !== mapB.number) {
            return mapA.number - mapB.number
        }
        return 0
    }
    files.sort(compareSorting)
    return files
}
