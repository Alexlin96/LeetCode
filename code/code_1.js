/*
 * @title: 删除排序数组中的重复项(26)
 * @description: 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @keyword: 数组 双指针
 * @date: 2021-03-01
 */
var removeDuplicates = function (nums) {
  var j = 0;
  for (let i = 1; i < nums.length; i++) {
    nums[j] !== nums[i] && (j++, (nums[j] = nums[i]));
  }
  return j + 1;
};

/*
 * @title: 买卖股票的最佳时机 II(122)
 * @description: 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @keyword: 数组 贪心算法
 * @date: 2021-03-02
 */
var maxProfit = function (arr) {
  let allNum = 0;
  let intervalNum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i === len - 1) break;
    if (arr[i] < arr[i + 1]) {
      intervalNum += arr[i + 1] - arr[i];
      i === len - 2 && (allNum += intervalNum); // 最后一个
    } else {
      allNum += intervalNum;
      intervalNum = 0;
    }
  }
  return allNum;
};

/*
 * @title: 旋转数组 (189)
 * @description: 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * @keyword: 右移
 * @date: 2021-03-03
 */
var rotate = function(nums, k) {
  const len = nums.length
  const arr = {}
  for (let i = 0; i < len; i++) {
    const index = i + k > len - 1 ? (i + k) % len : i + k
    Object.assign(arr, {
      [index]: nums[i]
    })
  }
  for (let j in arr) {
    nums.splice(j, 1, arr[j])
  }
};

/*
 * @title: 存在重复元素(217)
 * @description: 
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * @keyword: hash
 * @date: 2021-03-04
 */
var containsDuplicate = function(nums) {
  let hash = {}
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1
    } else {
      hash[nums[i]] += 1
    } 
  }
  Object.values(hash).forEach(num => {
    num > 1 && (flag = true)
  })
  return flag
};

/*
 * @title: 只出现一次的数字 (136)
 * @description: 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @keyword: hash
 * @date: 2021-03-05
 */
var singleNumber = function(nums) {
  let hash = {}
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1
    } else {
      hash[nums[i]] += 1
    }
  }
  for (let j in hash) {
    if (hash[j] === 1) {
      res = j
      break
    }
  }
  return res
};

/*
 * @title: 反转字符串(344)
 * @description: 
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * @keyword: 双指针
 * @date: 2021-03-06
 */
var reverseString = function(s) {
  let len = s.length
  for (let i = 0; i < len / 2; i++) {
    [ s[i], s[len - 1 - i] ] = [ s[len - 1 - i], s[i]]
  }
  return s
};

/*
 * @title: 整数反转(7)
 * @description: 
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * @keyword: 整数 反转
 * @date: 2021-03-07
 */
var reverse = function(x) {
  let numType = 1; // 0 负数 1 正数或者0
  let maxval =  2147483647, minval = -2147483648;
  x >=0 ? (numType = 1) : (numType = 0)
  let absinputnum = Math.abs(x);
  let len = String(absinputnum).length;
  if(len == 1){
    return numType ? absinputnum : -absinputnum;
  }else{
    let newarr = String(absinputnum).split('').reverse();
    let returnArr = newarr.join(',').replace(/,/g,'');
    return numType ? maxval< returnArr ? 0 : +returnArr: minval > -returnArr ? 0 : -returnArr;
  }
};

/*
 * @title: 字符串中的第一个唯一字符
 * @description: 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * @keyword: hash
 * @date: 2021-03-08
 */
var firstUniqChar = function(s) {
  let res = -1
  let hash = {}
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = {
        index: i,
        num: 1
      }
    } else {
      hash[arr[i]].num += 1
    }
  }
  for (let j in hash) {
    if (hash[j].num === 1) {
      res = hash[j].index
      break
    }
  }
  return res
};

/*
 * @title: 有效的字母异位词 (242)
 * @description: 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词
 * @keyword: hash 
 * @date: 2021-03-09
 */
var isAnagram = function(s, t) {
  let sArr = s.split('')
  let tArr = t.split('')
  let sHash = {}
  let tHash = {}
  let flag = true
  if (s.length !== t.length) return false
  for (let i = 0; i < sArr.length; i++) {
    if (!sHash[sArr[i]]) {
      sHash[sArr[i]] = 1
    } else {
      sHash[sArr[i]] += 1
    }
  }
  for (let i = 0; i < tArr.length; i++) {
    if (!tHash[tArr[i]]) {
      tHash[tArr[i]] = 1
    } else {
      tHash[tArr[i]] += 1
    }
  }

  for(let key in sHash) {
    if (sHash[key] !== tHash[key]) {
      flag = false
      break
    }
  }
  return flag
};

/*
 * @title: 两个数组的交集 II(350)
 * @description: 给定两个数组，编写一个函数来计算它们的交集
 * @keyword: hash
 * @date: 2021-03-10
 * @param {*} nums1
 * @param {*} nums2
 */
var intersect = function(nums1, nums2) {
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
  const res = []
  for (let j in nums1_hash) {
    if (nums1_hash[j] > 0 && nums2_hash[j]) {
      const minNum = nums1_hash[j] > nums2_hash[j] ? nums2_hash[j] : nums1_hash[j]
      for (let k = 0; k < minNum; k++) {
        res.push(j)  
      }
    }
  }
  return res
};

