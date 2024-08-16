import MaxHeap from "./index";

test('popMax', () => {
  const mh = new MaxHeap()

  for (let i = 1; i <= 50; i++) {
    mh.add(i);
  }

  for (let i = 50; i < 0; i--) {
    const max = mh.popMax()
  
    console.log("max", max)
    expect(max).toBe(i)
  }
});