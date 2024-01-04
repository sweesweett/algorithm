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
    let list3 = new ListNode()
    recursion(list1,list2,list3)
    return list3.next
};

    const recursion=(l1,l2,newList)=>{
        if(!(l1&&l2)){
            newList.next=!l1?l2:l1
        
            return 
        }
        if(l1.val<=l2.val){
            newList.next=l1
            l1=l1.next
        }else{
            newList.next=l2
            l2=l2.next
        }
        newList=newList.next
        return recursion(l1,l2,newList)
    }
    
