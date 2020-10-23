/* 70. 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

* 示例 ：

输入： 1
输出： 1

输入： 2
输出： 2
1.  1 阶 + 1 阶
2.  2 阶

输入： 3
输出： 3
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

输入： 4
输出： 5
1.  1+1+1+1
2.  2+1+1
3.  1+2+1
4.  1+1+2
5.  2+2

分析：
输出f(n) = (n-1)+(n-2),斐波那契数列
 */

import { log } from "@tool/util";

/* === 斐波那契数列+数组缓存 ===
 */
export default function climbStairs(n) {
  return fib(n + 1); // 梯子从1阶开始
}
function fib(n) {
  let arr = [0, 1];
  function item(n) {
    if (n < 2) return n;
    if (arr[n] !== void 0) return arr[n];
    arr[n] = item(n - 1) + item(n - 2);
    return arr[n];
  }
  return item(n);
}

/* @@@ cases @@@ */
climbStairs.id = "70. 爬楼梯";
log(climbStairs(1));
log(climbStairs(2));
log(climbStairs(3));
log(climbStairs(4));
log(climbStairs(5));
