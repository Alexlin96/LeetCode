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

/*
 * @title: 加一(66)
 * @description: 
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @keyword: 数组反转
 * @date: 2021-03-14
 */
var plusOne = function(digits) {
  const res = []
  let isAdd = false
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1){
      num = digits[i] + 1
    } else {
      num = digits[i]
    }
    if (isAdd) {
      num = num + 1
      isAdd = false
    }
    if (num === 10) {
      res.push(0)
      isAdd = true
    } else {
      res.push(num)
    }
  }
  isAdd && res.push(1)
  return res.reverse()
};

/*
 * @title: 移动零(66)
 * @description: 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * @keyword: 遍历交换
 * @date: 2021-03-15
 * @param {*} nums
 */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === 0 && i !== nums.length - 1 ) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      } 
    }
  }
  return nums
};

/*
 * @title: 最长公共前缀(14)
 * @description: 编写一个函数来查找字符串数组中的最长公共前缀,如果不存在公共前缀，返回空字符串 ""。
 * @keyword: 遍历对比
 * @date: 2021-03-16
 */
var longestCommonPrefix = function(strs) {
  const minStr = strs.length && strs.reduce((a,b)=>{
    return a.length > b.length ? b : a;    // 找出最短字符串
  })
  if (minStr.length === 0) return ''
  let commonStr = ''
  for (let i = 0; i < minStr.length; i++) { // 外层遍历最小的字符串
    for (let j = 0; j < strs.length; j++) { // 内层遍历数组
      if (minStr[i] !== strs[j][i]) return commonStr // 不符合其中一个元素的对应最小字符串位置不相同 退出循环
    }
    commonStr += minStr[i] 
  }
  return commonStr
};


/*
 * @title: 设计哈希集合 (705)
 * @description: 实现 MyHashSet 类：
  void add(key) 向哈希集合中插入值 key 。
  bool contains(key) 返回哈希集合中是否存在这个值 key 。
  void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 * @keyword: hash
 * @date: 2021-03-17
 */
// 初始化数据结构
const MyHashSet = function() {

  this.hash = []; // 设计哈希表

  /**
   * 新增
   * @param {number} key 
   * @return {void}
   */
  this.add = (key) => {
    if (!this.hash.includes(key)) {
      this.hash.push(key);
    }
  };
  /**
   * 删除
   * @param {number} key
   * @return {void}
   */
  this.remove = (key) => {
    const index = this.hash.indexOf(key);
    if (index > -1) {
      this.hash.splice(index, 1);
    }
  };
  /**
   * 包含：如果包含返回 true，否则返回 false
   * @param {number} key 
   * @return {boolean}
   */
  this.contains = (key) => {
    return this.hash.includes(key);
  };
};

/*
 * @title: 设计哈希映射(706)
 * @description: 
 * 实现 MyHashMap 类：
  MyHashMap() 用空映射初始化对象
  void put(int key, int value) 向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值 value 。
  int get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
  void remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。
 * @keyword: hash对象
 * @date: 2021-03-18
 */
class MyHashMap {
  constructor() {
    this.hash = {}
  };
  put(key, value) {
    if (this.get(key)) {
      this.hash[key] = value
    } else {
      Object.assign(this.hash, {
        [key] : value
      })
    }
  };
  remove(key) {
    if (this.get(key)) delete this.hash[key]
  };
  get(key) {
    return this.hash.hasOwnProperty(key) ? this.hash[key] : -1
  }
}

/*
 * @title: 两个数组的交集 II(349)
 * @description: 给定两个数组，编写一个函数来计算它们的交集 输出结果中的每个元素一定是唯一的, 不考虑输出结果的顺序
 * @keyword: hash
 * @date: 2021-03-19
 */
var intersection = function(nums1, nums2) {
  let nums1_hash = {}
  let nums2_hash = {}
  for (let i = 0; i < nums1.length; i++) {
    if (!nums1_hash[nums1[i]]) {
      nums1_hash[nums1[i]] = 1
    } else {
      nums1_hash[nums1[i]] += 1
    }  
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums2_hash[nums2[i]]) {
      nums2_hash[nums2[i]] = 1
    } else {
      nums2_hash[nums2[i]] += 1
    }  
  }
  let res = []
  for (let j in nums1_hash) {
    if (nums1_hash[j] > 0 && nums2_hash[j]) {
      const minNum = nums1_hash[j] > nums2_hash[j] ? nums2_hash[j] : nums1_hash[j]
      for (let k = 0; k < minNum; k++) {
        res.push(j)  
      }
    }
  }
  res = Array.from(new Set(res)) // 去重
  return res
};

/*
 * @title: 同构字符串 (205)
 * @description: 给定两个字符串 s 和 t，判断它们是否是同构的
 * @keyword: indexOf
 * @date: 2021-03-20
 */
var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false // 判断当前字母的第一次出现位置是否一样
  }
  return true
};
