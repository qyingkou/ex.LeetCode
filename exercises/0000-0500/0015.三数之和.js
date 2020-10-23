/** 15. 三数之和
 * 题目：
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
 */

import { log } from "@tool/util";

/* === 遍历 + 双指针 ===
升序排序
双指针移动规则：若两数相加偏小则移动左指针，否则移动右指针
map的key存字符串，value保留原始值。达到去重效果。
 */

export default function threeSum(nums) {
  nums.sort();
  let result = new Map();
  let i = 0,
    j = i + 1,
    k = nums.length - 1;
  while (i < nums.length - 1) {
    let want = 0 - nums[i];
    // 指针重合则重置位置
    if (j >= k) {
      i++;
      j = i + 1;
      k = nums.length - 1;
      continue;
    }
    // 指针移动规则
    if (nums[j] + nums[k] === want) {
      const value = [nums[i], nums[j], nums[k]].sort();
      const key = value.toString();
      result.set(key, value);
      j++;
      k--;
    } else if (nums[j] + nums[k] > want) {
      k--;
    } else {
      j++;
    }
  }

  return [...result.values()];
}

/* @@@ cases @@@ */
threeSum.id = "15. 三数之和";
log(threeSum([-1, 0, 1, 2, -1, -4]));
