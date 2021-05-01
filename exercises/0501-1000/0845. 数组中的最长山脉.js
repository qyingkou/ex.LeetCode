/* 845. 数组中的最长山脉
我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：

B.length >= 3
存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
（注意：B 可以是 A 的任意子数组，包括整个数组 A。）

给出一个整数数组 A，返回最长 “山脉” 的长度。

如果不含有 “山脉” 则返回 0。

 */

import { log } from "@tool/util";

/**
 * @param {number[]} A
 * @return {number}
 */

/* 错误示范：这样找出来的是第一座山脉，而非最长山脉
 所以，有必要将找到的山脉都存成数组比较长度
  */
export default function longestMountain(A) {
  if (A.length === 1) return 0;

  let l = 0,
    t = 0,
    r = 0;

  for (let i = 1; i < A.length; i++) {
    const findedMountain = l !== t || (l === t && A[i] > A[l]),
      findedMountainTop = findedMountain && A[i] < A[t],
      findedMountainBottom = findedMountainTop && A[i] >= A[r];

    // 寻找山脉
    if (!findedMountain) {
      t = i;
      r = i;
      l = i;
      continue;
    }
    // 寻找山峰:山峰是平顶的情况未考虑
    if (!findedMountainTop) {
      r = i;
      t = i;
      continue;
    }
    // 寻找谷底
    if (!findedMountainBottom) {
      r = i;
    } else {
      break;
    }
  }

  return t === r ? 0 : r - l + 1;
}

/* @cases */
longestMountain.id = "845. 数组中的最长山脉";
// log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
// log(longestMountain([2, 2, 2])); // 0
// log(longestMountain([5,4,3,2,1,2,3,2])); // 0
log(longestMountain([0, 1, 0, 1])); // 3
