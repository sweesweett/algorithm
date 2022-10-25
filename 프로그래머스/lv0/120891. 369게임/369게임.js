function solution(order) {
   return String(order).split('').filter(el=>el==='3'||el==='6'||el==='9').length
}