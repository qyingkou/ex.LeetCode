/* 0141.环形列表
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：
你能用 O(1)（即，常量）内存解决此问题吗？
 */
import { log } from "@tool/util";
import { onewayCycle } from "@mock/linkedList";

export default function hasCycle(head) {
  let curr = head;
  let set = new Set();
  var check = function () {
    if (curr === null) return false;
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
    return check();
  };
  return check();
}

/* @@@usage@@@
 */
hasCycle.id = "0141.环形列表";
log(hasCycle(onewayCycle([])))
log(hasCycle(onewayCycle([1])))
log(hasCycle(onewayCycle([1,2])))
log(hasCycle(onewayCycle([1, 2, 3], 1)));
