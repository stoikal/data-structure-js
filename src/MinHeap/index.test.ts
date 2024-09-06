import {expect, test} from '@jest/globals'
import MinHeap from "./index"

test('size', () => {
  const SIZE = 50;
  const mh = new MinHeap()

  for (let i = 1; i <= SIZE; i++) {
    mh.add(i)
  }

  expect(mh.size).toBe(SIZE)
});

test('popMin', () => {
  const SIZE = 50;
  const mh = new MinHeap()

  for (let i = 1; i <= SIZE; i++) {
    mh.add(i)
  }

  for (let i = 50; i < 0; i--) {
    const min = mh.popMin()
    console.log(i)
    expect(min).toBe(i)
  }
})
