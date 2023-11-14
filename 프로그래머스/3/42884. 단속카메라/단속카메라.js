function solution(routes) {
    routes.sort((a,b)=>a[0]-b[0])
    let count=1
    for(let i=0;i<routes.length;i++){
        let [iMin,iMax]=routes[i]
        if(i===0){
            min=iMin
            max=iMax
            continue
        }   
        if(max<iMin||min>iMax){
            count++
            min=iMin
            max=iMax
            continue
            }
        if(min<=iMin&&max<=iMax){
           min=iMin
        }else if(min>=iMin&&max<=iMax){
            continue
        }else if(min>=iMin&&max>=iMax){
            max=iMax
           
        }else{
            
         min=iMin
         max=iMax
        }
            

    }
   
    return count

}