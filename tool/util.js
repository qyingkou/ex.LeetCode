export function log(msg) {
  const t1 = performance.now();
  console.log(msg);
  const t2 = performance.now();
  console.log("用时:", t2 - t1, "ms");
}
