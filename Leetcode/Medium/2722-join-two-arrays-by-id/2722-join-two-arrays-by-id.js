/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    //javascript 30 days challenge, not algorithm problem
   let obj={}
   let arr=[]
   for(let i=0;i<arr1.length;i++){
       arr.push(arr1[i])
       obj[arr1[i].id]=i
   }

   arr2.forEach(el=>{
       if(obj[el.id]!==undefined){
          arr[obj[el.id]]={...arr[obj[el.id]],...el}
       }else{
           arr.push(el)
       }
       })
   return arr.sort((a,b)=>a.id-b.id)
};