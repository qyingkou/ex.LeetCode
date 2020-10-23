import { LinkedList } from "./LinkedList.js";

let list = new LinkedList();
list.id = "LinkedList数据结构"
export default list;

list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// console.log(list.removeAt(3));
// console.log(list.insert(2, { name: "new" }));
// console.log(list);
// console.log(list.indexOf(2))
// console.log(list.indexOf(3))
console.log(list.remove(3));
console.log(list)