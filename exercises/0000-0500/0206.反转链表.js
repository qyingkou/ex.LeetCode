/* 0206.反转链表

反转一个单链表
singly-linked list的数据结构如下：
function ListNode(val) {
    this.val = val;
    this.next = null;
}

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */

import { log } from "@tool/util";
/* 递归
 */
// export default function reverseList(head) {
//     const reverse = (prev, curr) => {
//         if (curr === null) return prev;
//         let tmp = curr.next;
//         curr.next = prev;
//         // 移动指针
//         prev = curr;
//         curr = tmp;
//         return reverse(prev, curr);
//     };
//     return reverse(null, head);
// }

/* 迭代
 */
export default function reverseList(head) {
    let curr = head,
        prev = null;
    while (curr !== null) {
        let tmp = curr.next;
        curr.next = prev;
        // 移动指针
        prev = curr;
        curr = tmp;
    }
    return prev;
}

/* @@@ usage @@@ */
reverseList.id = "0206.反转链表";
log(
    reverseList({
        val: 1,
        next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
    })
);
