function solution(new_id) {
    let id=new_id.toLowerCase()
   id=id.replace(/[^0-9a-z-_.]/g,'')
       
    id=id.replace(/[.]{2,}/g,'.')
  // return id
    id=id.replace(/^[.]|[.]$/g,'')

    
    if(id.length===0){
        id="a"
    }
    if(id.length>15){
        id=id.slice(0,15)
        if(id[14]==='.'){
            id=id.slice(0,14)
        }
    }
  
    if(id.length<=2){
        id=id+id[id.length-1].repeat(3-id.length)
    }
    return id
}