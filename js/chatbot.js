// 配列を定義する
const array = [1, 2, 3];

// 完全順列を生成する
function getPermutations(array) {
  if (array.length === 1) {
    return [array];
  }

  const permutations = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const rest = array.slice(0, i).concat(array.slice(i + 1));
    const subpermutations = getPermutations(rest);

    for (let j = 0; j < subpermutations.length; j++) {
      permutations.push([current].concat(subpermutations[j]));
    }

  }
  return permutations;
}

const permutations = getPermutations(array);

// 生成した完全順列を表示する
for (let i = 0; i < permutations.length; i++) {
  console.log(permutations[i]);
}