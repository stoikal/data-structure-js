import MinHeap from "./index";

test('popMin', () => {
  const mh = new MinHeap()

  for (let i = 1; i <= 50; i++) {
    mh.add(i);
  }

  for (let i = 1; i <= 0; i++) {
    const max = mh.popMin()
  
    console.log("max", max)
    expect(max).toBe(i)
  }
});
