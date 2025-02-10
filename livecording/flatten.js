const flatten = (array, depth = Infinity) => {
  return depth > 0
    ? array.reduce((acc, item) => {
        const currentItem = Array.isArray(item)
          ? flatten(item, depth - 1)
          : item;
        return acc.concat(currentItem);
      }, [])
    : array.slice();
};

console.log(flatten([1, [2], [3, 4], 5]));
// console.log(flatten([1, [2, [3, 4]]], 1));
// console.log(flatten([1, [], [], [2], 3]));
