// const MaxHeap = require("./MaxHeap");
import MaxHeap from "./MaxHeap";

const mh = new MaxHeap();

for (let i = 1; i <= 50; i++) {
  mh.add(i);
}

console.log(mh);

for (let i = 1; i <= 50; i++) {
  const max = mh.popMax();

  console.log("max", max)
}