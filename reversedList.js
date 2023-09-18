/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return head;
    let currentNode = head;
    let prevNode = null;
    while (true) {
        if (currentNode.next === null) {
            currentNode.next = prevNode;
            return currentNode;
        }
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
};
