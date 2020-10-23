/* 链表操作练习
 */

export class LinkedList {
  constructor(element) {
    this.length = 0;
    this.head = null; // 链表的头元素
  }
  /* 尾部添加:列表为空/列表不为空
   */
  append(element) {
    let current = null;
    var node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      // 找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 执行append操作
      current.next = node;
    }
    this.length++;
  }
  insert(position, element) {
    if (position < 0 || position > this.length - 1) return null;
    let current = this.head,
      previous = null;
    let node = new Node(element);
    if (position === 0) {
      this.head = node;
    } else {
      while (position > 0) {
        previous = current;
        current = current.next;
        position--;
      }
      previous.next = node;
      node.next = current;
    }
    this.length++;
    return true;
  }
  remove(element) {
    let current = this.head,
      previous = null;
    if (this.length === 0) return false;
    if (current.element === element) {
      this.head = current.next;
    } else {
      while (current.next) {
        if (current.element === element) {
          // debugger;
          previous.next = current.next;
          break;
        } else {
          // debugger;
          previous = current;
          current = current.next;
        }
      }
    }
    return current.element;
  }
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return null;
    let current = this.head,
      previous = null;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (position > 0) {
        previous = current;
        current = current.next;
        position--;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }
  indexOf(element) {
    let current = this.head,
      index = 0;
    while (current.next) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  toString() {
    let current = this.head,
      str = "";
    while (current) {
      str += "," + current.element;
      current = current.next;
    }
    return str.slice(1);
  }
  print() {}
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
