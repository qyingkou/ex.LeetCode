/** 11. 盛最多水的容器
 * 题目：
    给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
    在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：
    你不能倾斜容器，且 n 的值至少为 2。
 * 演示： 
    输入：[1,8,6,2,5,4,8,3,7]
    输出：49
 */
import { log } from "@tool/util";

/* === 双指针 ===
  升序排序，双指针在两端相向收敛
  移动指针的规则：
  - 当指针的值不同时，移动值较小的指针才有可能遇到更大面积，反之移动值较大的指针只会得到小于等于当前的面积。
  - 当指针的值相同时，同时走一步。
  */
export default function maxArea(height) {
  let max = 0,
    l = 0,
    r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    // 记录最大值
    if (max !== area) max = Math.max(max, area);
    // 移动指针
    height[l] === height[r] ? r-- + l++ : height[l] > height[r] ? r-- : l++;
  }
  return max;
}

/* @@@ cases @@@ */
maxArea.id = "11. 盛最多水的容器";
log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
