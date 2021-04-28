/*
 * @title: 唯一元素的和 (1748)
 * @description: 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。请你返回 nums 中唯一元素的 和 。
 * @keyword: hash
 * @date: 2021-04-01
 */
var sumOfUnique = function(nums) {
	let hash = {}
	for (let i = 0; i < nums.length; i++) {
		if (!hash[nums[i]]) {
			hash[nums[i]] = 1
		} else {
			hash[nums[i]] ++
		} 
	}
	const fData = Object.keys(hash).filter(f => hash[f] === 1)
	return fData.length ? fData.reduce((x, y) => x*1 + y*1, 0) : 0
};

/*
 * @title: 单词规律 (290)
 * @description: 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * @keyword: map
 * @date: 2021-04-02
 */
var wordPattern = function(pattern, s) {
	const word2ch = new Map();
  const ch2word = new Map();
	const arr_p = pattern.split('')
	const arr_s = s.split(' ')
	if (arr_p.length !== arr_s.length) return false
	for (const [i, word] of arr_s.entries()) {
		const ch = arr_p[i];
		if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
			return false;
		}
		word2ch.set(word, ch);
		ch2word.set(ch, word);
	}
	return true;
};

/*
 * @title: 重复 N 次的元素 (961)
 * @description: 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。返回重复了 N 次的那个元素
 * @keyword: 排序 相邻元素比较
 * @date: 2021-04-03
 */
var repeatedNTimes = function(A) {
	A.sort((a, b) => a - b)
	for (let i = 0; i < A.length - 1; i++) {
		if (A[i] === A[i+1]) { // 相邻值等
			return A[i]
		}	
	}
};

/*
 * @title: 两数之和 II - 输入有序数组 (167)
 * @description: 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target
 * @keyword: 二分查找
 * @date: 2021-04-04
 */
var twoSum = function(numbers, target) {
	for (let i = 0; i < numbers.length; i++) {
		let firstNumber = numbers[i] // 固定第一个数
		let low = i + 1, high = numbers.length - 1
		while(low <= high) { // 二分查找第二个数
			let middle = Math.round((low + high) / 2) // 中间下标
			if (numbers[middle] + firstNumber === target) {
				return [i + 1, middle + 1]
			} else if (numbers[middle] > target - firstNumber) { // 左半区
				high = middle - 1
			}  else { // 右半区
				low = middle + 1
			}
		}
	}
	return []
};