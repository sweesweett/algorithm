/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let map=new Map()
  if(!head){
    return null
  }
  while(head!==null){
      if(map.has(head)){
          return head
      }else{
          map.set(head)
      }
    head=head.next

  }

  return null
};