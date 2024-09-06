import {expect, test} from '@jest/globals'
import MaxHeap from "./index"

test('size', () => {
  const SIZE = 50;
  const mh = new MaxHeap()

  for (let i = 1; i <= SIZE; i++) {
    mh.add(i)
  }

  expect(mh.size).toBe(SIZE)
})

test('popMax', () => {
  const SIZE = 50;
  const mh = new MaxHeap()

  for (let i = 1; i <= SIZE; i++) {
    mh.add(i)
  }

  for (let i = SIZE; i < 0; i--) {
    const max = mh.popMax()

    expect(max).toBe(i)
  }
})
