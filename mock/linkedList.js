/* @param {Array} vals
 */
export function oneway(vals) {
  if (vals === void 0 || vals.length === 0) {
    return null;
  }
  let objs = [];
  vals.forEach((item, index) => {
    const node = new ListNode(item);
    objs.push(node);
    if (index > 0) {
      objs[index - 1].next = node;
    }
  });
  return objs[0];
}
export function twoway(vals) {}
export function onewayCycle(vals, pos = -1) {
  let linkedList = oneway(vals),
    array = [],
    curr = linkedList;
  pos >= 0 ? pos : -1;
  if (vals.length < 2) return linkedList;
  while (curr.next) {
    array.push(curr);
    curr = curr.next;
  }
  curr.next = pos === -1 ? null : array[pos];
  return linkedList;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
