/* 155.最小栈
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈方法的类。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 */
import { log } from "@tool/util";
/**
 * initialize your data structure here.
 */
export default function MinStack() {
  this.stack = [];
  this.minstack = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const index = this.minstack.length - 1;
  const minvalue = this.minstack[index];
  if (this.minstack.length === 0 || x < minvalue) {
    this.minstack.push(x);
  } else {
    this.minstack.push(minvalue);
  }
  return this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minstack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minstack[this.minstack.length - 1];
};

/* @@@cases */
MinStack.id = "155.最小栈";
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
log(minStack.getMin());
minStack.pop();
// log(minStack.top());
log(minStack.getMin());
