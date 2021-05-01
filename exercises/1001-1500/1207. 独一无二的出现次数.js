/* 1207. 独一无二的出现次数
给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 */
import { log } from "@tool/util";

/**
 * @param {number[]} arr
 * @return {boolean}
 */

/* 傻瓜做法
首先得到数组A的副本B，B做了去重（set）
然后查询数组B成员在A中的个数，存为C（map）
map转数组，对数组成员做唯一性判断
 */
export default function uniqueOccurrences(arr) {
  let set = new Set(arr);
  let map = {};
  set.forEach((item) => (map[item] = 0));
  for (let i = 0; i < arr.length; i++) map[arr[i]]++;

  const list = Object.values(map);
  return list.every((item) => {
    if (list.indexOf(item) !== list.lastIndexOf(item)) {
      return false;
    }
    return true;
  });
}

/* @cases */
uniqueOccurrences.id = "1207. 独一无二的出现次数";
// log(uniqueOccurrences([1, 2, 3, 4, 3]));
// log(uniqueOccurrences([1,2,2,1,1,3]));
log(uniqueOccurrences([1, 2]));
log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
