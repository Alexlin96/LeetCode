/*
 * @title: 两个列表的最小索引总和 (599)
 * @description: 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
	你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 * @keyword: hash
 * @date: 2021-03-21
 */
var findRestaurant = function (list1, list2) {
  let hash = {};
  for (let i = 0; i < list1.length; i++) {
    const item = list1[i];
    if (list2.includes(item)) {
      Object.assign(hash, {
        [item]: i + list2.indexOf(item),
      });
    }
  }
  let res = [];
  let num = -1;
  for (const key in hash) {
    if (num === -1 || hash[key] < num) {
      num = hash[key];
      res = [key]
    } else if (hash[key] === num) {
			res.push(key);
		}
  }
  return num === -1 ? "" : res;
};

/*
 * @title: 存在重复元素 II (219)
 * @description: 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k
 * @keyword: 数组元素对比
 * @date: 2021-03-22
 */
var containsNearbyDuplicate = function(nums, k) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) { // 包含相同 返回true
      return true
    } else {
      arr.push(nums[i])
    }
    if (arr.length > k) arr.shift() // 长度大于k 删除第一个元素
  }
  return false
};
