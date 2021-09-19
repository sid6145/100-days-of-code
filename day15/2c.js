const array = ["A", "B", "C"];

function reverseArray(array) {
  let revArray = [];

  for (let i = 1; i <= array.length; i++) {
    // if (array[array.length - i] != undefined) {
      revArray.push(array[array.length - i]);
    // }
  }

  return revArray;
}

console.log(reverseArray(array));
