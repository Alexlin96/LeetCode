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
