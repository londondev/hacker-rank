import {maxCommonArraySlice} from './maxArraySlice.js';

test('returns 0 if array is empty',()=>{
   expect(maxCommonArraySlice([])).toBe(0);
});

test('should return length of array if array only contains two different numbers',()=>{
    expect(maxCommonArraySlice([1,2,1,2])).toBe(4);
});

test('should return longest series if there are more than two differenct numbers',()=>{
  const numbers=[1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 6, 2, 1, 8];
    expect(maxCommonArraySlice(numbers)).toBe(10);
})
