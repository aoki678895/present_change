function permutation(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const firstElem = arr[i];
    const restElem = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const innerPermutations = permutation(restElem);

    for (let j = 0; j < innerPermutations.length; j++) {
      const perm = [firstElem, ...innerPermutations[j]];
      result.push(perm);
    }
  }

  return result;
}

// 配列を宣言
let arr = [1, 2, 3, 4, 5];

// 順列を求める
let permutations = permutation(arr);

// 順列の中から、i番目がiでないものをフィルタリングする
let filteredPermutations = permutations.filter(perm => {
  for (let i = 0; i < perm.length; i++) {
    if (perm[i] === i + 1) {
      return false;
    }
  }
  return true;
});

console.log(filteredPermutations);