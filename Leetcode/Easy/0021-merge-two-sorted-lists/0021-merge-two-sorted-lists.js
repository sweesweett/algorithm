/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode(-1)
    let dd=list3
    while(list1!==null&&list2!==null){
        if(list1.val<=list2.val){
            dd.next=list1
            list1=list1.next
        }else{
            dd.next=list2
            list2=list2.next

        }
        dd=dd.next
    }
    dd.next = (list1==null)?list2:list1;
    return list3.next
};