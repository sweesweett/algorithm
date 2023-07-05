/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let arr=paragraph.replaceAll(/[!?',;.]/g,' ').toLowerCase().split(' ')
    let map = new Map()

    for(let el of arr){
        if(el===''){
            continue
        }
        if(!banned.includes(el)){
            if(map.has(el)){
                map.set(el,map.get(el)+1)
            }else{
                map.set(el,1)
            }

        }


    }
    let max=['',0]
    map.forEach((value,key)=>{
        if(max[1]<value){
            max[0]=key
            max[1]=value
        }

    })
    return max[0]
    };