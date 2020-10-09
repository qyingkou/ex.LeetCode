import result from "../exercises/0015.三数之和";

export class App {
  constructor() {
    this.name = "LeetCode playground";
  }
  draw() {
    return `<h3>${this.name}</h3>
    <p>正在搞 《${result.id}》</p>
    `;
  }
}
