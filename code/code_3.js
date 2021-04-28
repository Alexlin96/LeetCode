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


/*
 * @title: 搜索插入位置 (35)
 * @description: 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置
 * @keyword: 二分查找
 * @date: 2021-03-27
 */
var searchInsert = function(nums, target) {
  let low = 0, high = nums.length - 1
  while(low <= high) {
    let middle = Math.round((low + high) / 2) // 中间下标
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }
  return [...nums, target].sort((a, b) => a - b).indexOf(target) // 排序找下标
};


/*
 * @title: 合并区间 (56)
 * @description: 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间
 * @keyword: sort 二维数组排序 
 * @date: 2021-03-28
 */
var merge = function(intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => a[0] - b[0]) // 排序 按照左端点升序排列
  const res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[res.length -1][1]) { // 比较是否在区间
      res[res.length -1] = [res[res.length -1][0], Math.max(intervals[i][1], res[res.length -1][1])]
    } else {
      res.push(intervals[i])
    }
  }
  return res
};

/*
 * @title: 最长回文子串 (5)
 * @description: 给一个字符串 s，找到 s 中最长的回文子串
 * @keyword: 中心拓展法
 * @date: 2021-03-29
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s  // 长度小于2 返回本身
  let start = 0, end = 0
  let len = s.length
  const cExpend = (left, right) => {
    while(left >= 0 && right < len && s[left] === s[right]) {
      left --;
      right ++;
    }
    return right - left - 1 // 间隔数
  }

  for (let i = 0; i < len; i++) {
    let len_1 = cExpend(i , i) // aba
    let len_2 = cExpend(i , i+1) // aa
    let maxLen = Math.max(len_1, len_2)
    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2)
      end = i + Math.floor(maxLen / 2)
    }
  }
  return s.substr(start, end - start + 1)
};

/*
 * @title: 翻转字符串里的单词 (151)
 * @description: 给定一个字符串，逐个翻转字符串中的每个单词
 * @keyword: 字符串数组转换 数组翻转
 * @date: 2021-03-30
 */
var reverseWords = function(s) {
  s = s.trim() // 去除空格
  let arr = s.split(/\ +/) // 转换数组
  arr = arr.reverse() // 反转
  return arr.join(' ') // 转换字符串
};

