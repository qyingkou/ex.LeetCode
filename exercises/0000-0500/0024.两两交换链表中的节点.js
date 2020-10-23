/* 0024.两两交换链表中的节点
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import mock from "@mock/linkedList";
import { log } from "@tool/util";

export default function swapPairs(head) {
  if (head === null || head.next === null) return head;
  let p1 = head,
    p2 = head && head.next,
    dummy = { next: p2 },
    prev = dummy;
  var swap = function () {
    if (p2 === null) return dummy.next;
    // change links
    prev.next = p2;
    p1.next = p2.next;
    p2.next = p1;
    // walk
    prev = p1;
    p1 = prev.next;
    p2 = p1 && p1.next;
    return swap();
  };
  return swap();
}

/* @@@ usage @@@ */
swapPairs.id = "0024.两两交换链表中的节点";
log(swapPairs(mock([])));
log(swapPairs(mock([1])));
log(swapPairs(mock([1, 2])));
log(swapPairs(mock([1, 2, 3])));
log(swapPairs(mock([1, 2, 3, 4])));
log(swapPairs(mock([1, 2, 3, 4, 5])));
