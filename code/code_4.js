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

/*
 * @title:  二分查找 (704)
 * @description: 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @keyword: 二分查找
 * @date: 2021-04-05
 */
var search = function(nums, target) {
	let low = 0, high = nums.length - 1
	while(low <= high) {
		let middle = Math.round((low + high) / 2) // 中间下标
		if (nums[middle] === target) {
			return middle
		} else if (nums[middle] > target) { // 左半区
			high = middle - 1
		} else { // 右半区
			low = middle + 1
		}
	}
	return -1
};

/*
 * @title:  寻找重复数 (287)
 * @description: 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
 * @keyword: 二分查找
 * @date: 2021-04-06
 */
var findDuplicate = function(nums) {
	const n = nums.length
	let low = 1, high = n - 1, res = -1
	while(low <= high) {
		let middle = Math.round((low + high) / 2) // 中位数
		let cnt = 0 
		for (let i = 0; i < nums.length; i++) {
			cnt += nums[i] <= middle
		}
		if (cnt <= middle) { // 在右半区
			low = middle + 1
		} else {
			high = middle - 1 // 在左半区
			res = middle // 记录当前中位数的值 可能是最终重复值
		}
	}
	return res
};

/*
	工作繁忙 2021-04-06-2021-07-13 暂停
*/

/*
 * @title:  盛最多水的容器 (11)
 * @description: 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @keyword: 双指针
 * @date: 2021-07-14
 */
var maxArea = function(height) {
	let max = 0 // 最多容量
	for (let i = 0, j = height.length - 1; i < j;) { // 从两端往里遍历 直至重合
		let minHeight = 0
		if (height[i] > height[j]) { // 最小点在右
			minHeight = height[j]
			j--
		} else { // 最小点在左
			minHeight = height[i]
			i++
		}
		const area = (j - i + 1) * minHeight
		
		max = Math.max(area, max) // 取最大值
	}
	return max
};
