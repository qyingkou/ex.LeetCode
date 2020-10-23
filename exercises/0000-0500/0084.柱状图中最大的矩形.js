/* 0084. 柱状图中最大的矩形
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */
import { log } from "@tool/util";

/**
 * @param {number[]} heights
 * @return {number}
 */

/* 遍历+双指针扩散，双指针找小于当前长度的位置，记录下最大面积 
最后在所有面积中找最大值
*/
export default function largestRectangleArea(heights) {
  let areas = [];
  if (heights.length === 0) return 0;

  for (let i = 0; i < heights.length; i++) {
    let p1 = i,
      p2 = i;
    // 找到小于当前值的位置
    while (p1 >= 0) {
      if (heights[p1] < heights[i]) {
        p1++;
        break;
      } else {
        if (p1 === 0) {
          break;
        } else {
          p1--;
        }
      }
    }

    while (p2 < heights.length) {
      if (heights[p2] < heights[i]) {
        p2--;
        break;
      } else {
        if (p2 === heights.length - 1) {
          break;
        } else {
          p2++;
        }
      }
    }

    let area = (p2 - p1 + 1) * Math.min(...heights.slice(p1, p2 + 1));
    areas.push(area);
  }
  return Math.max(...areas);
}

/* @@@cases@@@ */
largestRectangleArea.id = "84. 柱状图中最大的矩形";
// log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
log(largestRectangleArea([]));
