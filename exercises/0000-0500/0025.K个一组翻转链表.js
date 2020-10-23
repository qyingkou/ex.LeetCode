/* 待解决！！！ */

/* 0025.k个一组翻转链表
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：
给你这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5

说明：
你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { oneway } from "@mock/linkedList.js";
import { log } from "@tool/util";

/* 迭代
分步骤翻转子链表
 */

/**
 * @param {ListNode} head
 * @param {number} k - 组长度
 * @return {ListNode}
 */
export default function reverseKGroup(ohead, k) {
  let dummy = { next: null };
  let p1 = null; // 上一组的头
  let p2 = ohead; // 下一组的头
  while (p2) {
    const { head, tail, next } = reverse(p2, k);
    if (!next) return head;
    tail.next = p1;
    // 前进
    p1 = head;
    p2 = next;
  }
  return p1;
}
// 翻转子链表:一组含k个成员、一组不满足k个成员
// 满足k个成员：翻转组内，否则不翻转
// 返回{head,tail,next}
function reverse(ohead, k) {
  let p1 = null,
    p2 = ohead,
    next = null;
  for (let i = 0; i < k; i++) {
    next = p2.next;
    if (next === null) return { head: ohead, next: null };
  }
  for (let i = 0; i < k; i++) {
    // change
    const tmp = p2.next;
    p2.next = p1;
    // forward
    p1 = p2;
    p2 = tmp;
  }
  return { head: p1, tail: ohead, next: p2 };
}

/* @@@usage@@@ */
reverseKGroup.id = "0025.k个一组翻转链表";
// log(oneway([1, 2, 3, 4, 5]));
log(reverseKGroup(oneway([1, 2, 3, 4, 5]), 2));
