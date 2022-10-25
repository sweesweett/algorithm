function solution(my_string) {
    var answer = [];
  let arr = my_string.split('').filter(el=>!isNaN(Number(el)))
  arr= arr.map(el=>Number(el))
  return arr.sort((a,b)=>a-b)
}