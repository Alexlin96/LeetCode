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


