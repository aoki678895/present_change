function permutation(arr, n) {
  if (n === 1) {
    // i番目がiであるものを除く順列を出力
    if (arr[0] !== 1) {
      console.log(arr);
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    permutation(arr, n - 1);

    // iが偶数の場合、末尾の要素とi番目を交換
    if (n % 2 === 0) {
      [arr[n - 1], arr[i]] = [arr[i], arr[n - 1]];
    }
    // iが奇数の場合、末尾から2番目の要素とi番目を交換
    else {
      [arr[n - 2], arr[i]] = [arr[i], arr[n - 2]];
    }
  }
}

// 配列を宣言
let arr = [1, 2, 3, 4];

// 順列を求める
permutation(arr, arr.length);
