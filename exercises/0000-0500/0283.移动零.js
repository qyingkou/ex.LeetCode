/**
 * 283. 移动零
 * 任务：
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
 * 说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */

import { log } from "@tool/util";

/* === sort方法 ===
 */
// export default function moveZeroes(nums) {
//   return nums.sort((b, a) => {
//     // 遇到前一个因子为0，则调换
//     if (a === 0) return -1;
//   });
// }

/* === 失败：遇到0则两两交换 ===
  原因：遇到2个或更多0时，只会移动最后一个0
 */
// export default function moveZeroes(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (i === nums.length - 1) break;
//     let j = i + 1;
//     if (nums[i] === 0) {
//       nums[i] = nums[j];
//       nums[j] = 0;
//     }
//   }
// }

/* === 遍历+单指针 O(n) ===
单指针划过的区域，都是非项
遍历到的非0项与指针项交换（覆盖0项）
 */
// export default function moveZeroes(nums) {
//   let index = 0;
//   for (let i = index + 1; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[index] = nums[i];
//       nums[i] = 0;
//       index++;
//     }
//   }
// }

/* === 双指针 ===
和上面是一样的
 */
export default function moveZeroes(nums) {
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      nums[i] = 0;
      j++;
    }
    i++;
  }
}

/* @@@ cases @@@ */
moveZeroes.id = "283. 移动零";
const nums = [0, 1, 0, 3, 12, 16, 0, 19, 0];
moveZeroes(nums);
console.log(nums);
