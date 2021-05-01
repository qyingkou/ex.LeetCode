// import result from "../basicExercises/LinkedList_usage";
// import result from "../exercises/0000-0500/0234.回文链表";
// import result from "../exercises/0501-1000/0845. 数组中的最长山脉";
// import result from "../exercises/1001-1500/1365. 有多少小于当前数字的数字";
import result from "../exercises/1001-1500/1207. 独一无二的出现次数";

export class App {
  constructor() {
    this.name = "LeetCode playground";
  }
  draw() {
    return `<h3>${this.name}</h3><p>正在搞 《${
      (result && result.id) || ""
    }》</p>
    `;
  }
}
