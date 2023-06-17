/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    let dep=(dd)=>{
        if(Array.isArray(dd)){
            let arr=[]
            for(let val of dd){
                let ddd= dep(val)
                if(ddd){
                    arr.push(dep(val))
                }
                

            }
            return arr
        }else if(dd instanceof Object){

            for(let key in dd){
                dd[key]=dep(dd[key])
            }
            return dd
        }else{

            if(dd){
                return dd
            }
            return;


        }


    }
    return dep(obj)
};