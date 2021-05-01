/* 1365. 有多少小于当前数字的数字
给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

以数组形式返回答案。
 */
import { log } from "@tool/util";
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 暴力无脑 
不太好做缓存
*/
// export default function smallerNumbersThanCurrent(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] < nums[i]) count++;
//     }
//     result.push(count);
//   }
//   return result;
// }

/* 遍历+副本排序
首先将数组副本排序（升序）
然后遍历数据，当前项找到副本匹配的第一项，序号即是
同理，如果考察大于当前项的题目，只要将副本降序即可
 */
export default function smallerNumbersThanCurrent(nums) {
  let result = [];
  // 升序排序副本
  const newNums = nums.slice().sort((b, a) => b - a);
  // 获取当前项在副本中的序号
  for (let item of nums) {
    let pos = newNums.indexOf(item);
    pos !== -1 ? result.push(pos) : result.push(0);
  }
  return result;
}


/* @@cases */
smallerNumbersThanCurrent.id = "1365. 有多少小于当前数字的数字";
log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
// log(smallerNumbersThanCurrent([6,5,4,8])); // [2,1,0,3]
// log(smallerNumbersThanCurrent([7,7,7,7])); // [0,0,0,0]
