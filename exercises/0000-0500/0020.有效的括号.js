/* 20.有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 */
import { log } from "@tool/util";
/**
 * @param {string} s
 * @return {boolean}
 */
export default function isValid(s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i of s) {
    const lastchar = stack[stack.length - 1];
    // 消费字符: 排除lastchar和map[i]任何一个为空的情况
    if (lastchar && map[i] && lastchar === map[i]) {
      stack.pop();
      continue;
    }
    // 积蓄字符
    stack.push(i);
  }
  return stack.length === 0;
}

/* @@@cases@@@ */
isValid.id = "20.有效的括号";
// log(isValid(""));
log(isValid("()"));
log(isValid("()[]{}"));
log(isValid("(]"));
log(isValid("([)]"));
log(isValid("{[]}"));
