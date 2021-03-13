/*
 * @title: 3的幂 (326)
 * @description: 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false
 * @keyword: 递归
 * @date: 2021-03-11
 */
var isPowerOfThree = function (n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  }
  return isPowerOfThree(n / 3);
};

/*
 * @title: Fizz Buzz(412)
 * @description: 
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
	1. 如果 n 是3的倍数，输出“Fizz”；
	2. 如果 n 是5的倍数，输出“Buzz”；
	3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 * @keyword: 取余
 * @date: 2021-03-12
 */
var fizzBuzz = function (n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(String(i));
    }
  }
  return res;
};

/*
 * @title: 两数之和(1)
 * @description: 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * @keyword: 数组
 * @date: 2021-03-13
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};