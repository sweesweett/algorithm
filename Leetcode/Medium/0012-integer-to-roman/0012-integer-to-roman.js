/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

let map = new Map([[1,'I'],[5,'V'],[10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M'],[4,"IV"],[9,'IX'],[40,"XL"],[90,"XC"],[400,'CD'],[900,'CM']])
let arr=String(num).split('').map(Number)
return arr.map((num,idx)=>{
 let tenten=10**(arr.length-1-idx)    
if(map.has(num*tenten)){
  return map.get(num*tenten)
}else{
   
  if(num>5){
    return map.get(tenten*5)+`${map.get(tenten)}`.repeat(num-5)
  }else{

    return `${map.get(tenten)}`.repeat(num)
  }

}


}).join('')
};