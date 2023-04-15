/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let str=''
    let dd= head
    while(dd!==null){
        str+= dd.val
        dd=dd.next

    }
    return parseInt(str,2)
};