/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

let map = new Map([[1,'I'],[5,'V'],[10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M'],[4,"IV"],[9,'IX'],[40,"XL"],[90,"XC"],[400,'CD'],[900,'CM']])
let arr=[]
let max= String(num).length-1
while(max>=0){
arr.push(Math.trunc(num/10**max)*10**max)
num%=10**max
max--

}
return arr.map((num,idx)=>{
if(map.has(num)){
  return map.get(num)
}else{
  let trunc=Math.trunc(num/10**(arr.length-1-idx))
  if(trunc>5){
    return map.get(10**(arr.length-1-idx)*5)+`${map.get(10**(arr.length-1-idx))}`.repeat(trunc-5)
  }else{

    return `${map.get(10**(arr.length-1-idx))}`.repeat(trunc)
  }

}


}).join('')
};