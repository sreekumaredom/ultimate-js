//No side effects
//input --> output
const array = [1, 2, 3];

function removeLastItem(arr) {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
}

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);

console.log(array, array2, array3);
