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

/*
 * @title: 字母异位词分组 (49)
 * @description: 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串
 * @keyword: hash 字符串排序
 * @date: 2021-03-23
 */
var groupAnagrams = function(strs) {
  let hash = {}
  for (let i = 0; i < strs.length; i++) {
    let newItem = Array.from(strs[i])
    newItem.sort() // 排序 按元素Unicode位点排序，即Unicode编码升序排列
    newItem = newItem.join('')
    if (!hash[newItem]) {
      hash[newItem] = [strs[i]]
    } else {
      hash[newItem].push(strs[i])
    }
  }
  return Object.values(hash)
};

/*
 * @title: 宝石与石头 (771)
 * @description:  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石
 * @keyword: hash
 * @date: 2021-03-24
 * @param {*} jewels 宝石的类型
 * @param {*} stones 石头的类型
 */
var numJewelsInStones = function(jewels, stones) {
  let stonesArr = Array.from(stones)
  let num = 0
  for(const i of stonesArr) {
    jewels.includes(i) && (num += 1)
  }
  return num
};

/*
 * @title: 四数相加 II (454)
 * @description: 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
 * @keyword: hash 取反对比
 * @date: 2021-03-25
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let hash_1 = {}
  let num = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (!hash_1[nums1[i]+nums2[j]]) {
        hash_1[nums1[i]+nums2[j]] = 1
      } else {
        hash_1[nums1[i]+nums2[j]] += 1
      }
    }
  }
  for (let k = 0; k < nums3.length; k++) {
    for (let h = 0; h < nums4.length; h++) {
      const diffKey = String(-(nums3[k] + nums4[h])) 
      hash_1.hasOwnProperty(diffKey) && (num+=hash_1[diffKey]) // 判断是否等于相反数
    }
  }
  return num
};

/*
 * @title: 前 K 个高频元素 (347)
 * @description: 给定一个非空的整数数组，返回其中出现频率前 k 高的元素
 * @keyword: hash 排序
 * @date: 2021-03-26
 */
var topKFrequent = function(nums, k) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1
    } else {
      hash[nums[i]] += 1
    }
  }
  return Object.entries(hash).sort((a, b) => b[1] - a[1]).slice(0, k).map(a => a[0]);
};