var reorderList = function(head) {
    let mid=findMid(head,head)
    let reverse=reverseNode(mid,null)
    if(!mid){
        return head
    }
    mid.next=null
    let dd=head
    while(reverse.next){
        let tmp=dd.next
        dd.next= reverse
        dd=reverse
        reverse=tmp
        
    }
};
function findMid(node,slowNode){
    if(!node){
        return node
    }
    if(node.next&&node.next.next&&node.next.next.next){
        return findMid(node.next.next,slowNode.next)
    }
    return slowNode.next
}
function reverseNode(node,newNode){
    if(!node){
        return newNode
    }
    let newN= new ListNode(node.val)
    newN.next=newNode
    return reverseNode(node.next,newN)
}