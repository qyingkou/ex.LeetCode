import result from "../exercises/0000-0500/0234.回文链表";
// import result from "../basicExercises/LinkedList_usage";

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
