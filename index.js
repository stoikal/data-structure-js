const MaxHeap = require("./MaxHeap");

const mh = new MaxHeap();

for (let i = 1; i <= 50; i++) {
  mh.add(i);
}

console.log(mh);

for (let i = 1; i <= 50; i++) {
  const max = mh.popMax(i);

  console.log("max", max)
}