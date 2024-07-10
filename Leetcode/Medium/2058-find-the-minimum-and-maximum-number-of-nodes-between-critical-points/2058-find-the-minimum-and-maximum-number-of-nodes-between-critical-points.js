/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let rest=[]
    let min=Infinity
    let tmp=[] 
    while(head){
      if(!rest.length){
        rest.push(head.val)
        head=head.next
        continue
      }
      if(!head.next){
        break
      }
      let nextVal=head.next.val
      let prevVal=rest.at(-1)
      let val= head.val
      if((prevVal>val&&val<nextVal)||(prevVal<val&&val>nextVal)){
        if(tmp.length){
          min=Math.min(min,rest.length+1-tmp.at(-1))
        }
        
        tmp.push(rest.length+1)
      }
      rest.push(val)
      head=head.next
    }
    if(tmp.length<=1){
      return [-1,-1]
    }
    return [min,tmp.at(-1)-tmp[0]]

};