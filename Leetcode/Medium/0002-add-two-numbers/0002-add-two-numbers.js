/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(-1)
    let dd= list
    let ddd=0,sum=0
    while(l1||l2||sum>0){
        
        if(l1){
            sum+= l1.val
            l1=l1.next
        }
        if(l2){
            sum+=l2.val
            l2=l2.next
        }
        if(sum>=10){
            sum-=10
            ddd= 1
        }
        dd.next= new ListNode(sum)
        dd= dd.next
        sum=ddd
        ddd= 0
    }
   return list.next
};