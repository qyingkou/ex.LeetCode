/* 0234.回文链表
请判断一个链表是否为回文链表。
 */
import { log } from "@tool/util";
import { oneway } from "@mock/linkedList";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/* 1,将单链翻转，然后比较两个对象是否一致
Object.is(value1,value2)
 */
// function isPalindrome(head) {
//   while (p2.next) {
//   }
//   Object.is(o.a, o.b);
// }

/* 将单链的值存为数组，然后判断数组是否为回文 
*/
function isPalindrome(head) {
  let arr = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  let p1 = 0,
    p2 = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (p1 >= p2) break;
    if (arr[p1] !== arr[p2]) return false;
    p1++;
    p2--;
  }
  return true;
}

/* @cases */
isPalindrome.id = "";
log(isPalindrome(oneway([1, 2, 2, 1])));
log(isPalindrome(oneway([1, 2, 3, 1])));
log(isPalindrome(oneway([])));
