/* 0001.两数之和 
题目：
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]

分析：
  “数组中同一个元素不能使用两遍”，就是说同一个数组项不能自己加自己。
*/

/** @type {Array} */

import { log } from "@tool/util";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* === 遍历左因子，右因子移动 ===
 */
// export default function twoSum(nums, target) {
//   let r = 1;
//   for (let l = 0; l < nums.length; l++) {
//     r = l + 1;
//     while (r < nums.length) {
//       if (nums[l] + nums[r] === target) return [l, r];
//       r++;
//     }
//   }
// }

/* === 双遍历 === */
// export default function twoSum(nums, target) {
//   for (let l = 0; l < nums.length; l++) {
//     for (let r = l + 1; r < nums.length; r++) {
//       if (nums[l] + nums[r] === target) return [l, r];
//     }
//   }
// }

/** === hashmap查找（最优） ===
 * O(n)
 * 将指针经过的未匹配项保存起来，供后续查找
 */
// export default function twoSum(nums, target) {
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const want = target - nums[i];
//     if (map[want] !== void 0)
//       return i > map[want] ? [map[want], i] : [i, map[want]];
//     // 将未匹配项保存起来，key为值，value为下标
//     map[nums[i]] = i;
//   }
//   return [];
// }

/* === 其他 ===
双指针方案：无法使用。因为排序后下标就不是原来的下标了，而题目需要返回下标的。
 */

/* @@@ cases @@@ */
twoSum.id = "0001.两数之和";
log(
  twoSum(
    [2, 7, 11, 15, 3, 8, 12, 16, 22, 3, 6, 0, 234, 5, 47, 5432, 75, 76, 48, 89],
    151
  )
);
log(twoSum([2, 7, 11, 15], 9));
