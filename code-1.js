
//题目 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//find 两数之和下标
// function twoSum(nums, target) {
//     for(var i =0 ;i<nums.length;i++){
//         for(var j = i;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j];
//             }
//         }
//     }
// };
// var nums = [2, 8, 7, 15];
// var target = 9
// var result = twoSum(nums,target);

// 题目 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 整数反转
// function reverse(inputNum) {
//     let numType = 1; // 0 负数 1 正数或者0
//     let maxval =  2147483647, minval = -2147483648;
//     inputNum >=0 ? (numType = 1) : (numType = 0)
//     let absinputnum = Math.abs(inputNum);
//     let len = String(absinputnum).length;
//     if(len == 1){
//         return numType ? absinputnum : -absinputnum;
//     }else{
//         let newarr = String(absinputnum).split('').reverse();
//         let returnArr = newarr.join(',').replace(/,/g,'');
//         return numType ? maxval< returnArr ? 0 : +returnArr: minval > -returnArr ? 0 : -returnArr;
//     }
// }
// let inputNum = 1534236469;
// let result = reverse(inputNum);

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 最长公共前缀
// function longestCommonPrefix(arr) {
//     let commonStr = '';
//     if(arr.length == 0){
//         return ''
//     }
//     let minStr = arr.length && arr.reduce((a,b)=>{
//         return a.length > b.length ? b : a;    // 找出最短字符串
//     })
//     if(minStr.length == 0){
//         return '';
//     }
//     for(let i =0;i<minStr.length;i++){
//         for(let j =0; j < arr.length; j++){
//             if(minStr[i] != arr[j][i]){
//                 return commonStr;
//             }   
//         }
//         commonStr += minStr[i];
//     }
//     return commonStr;
// }
// let inputarr = ["flower","flow","flight"];
// let result = longestCommonPrefix(inputarr);

// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
//不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 删除排序数组中的重复项
// function removeDuplicates(arr) {
//     arr = [...new Set(arr)];
//     return arr;
// }
// let inputArr = [1,1,2];
// let resArr = removeDuplicates(inputArr);

//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 无重复字符的最长子串
// let lengthOfLongestSubstring = function(str) {
//     if(str.length == 1) return 1;
//     if(str == "") return 0;
//     let strArr = str.split('');
//     let publicStr = [];
//     let baseStr = [];

//     let addFlag = true;
//     strArr.forEach((item,index)=>{
//         addFlag && (baseStr.push(item),publicStr.push(item));
//         addFlag = false;
//         if(index !=0 && index < strArr.length){
//             console.log(publicStr)
//             if(publicStr.includes(item)){  // 存在改值
//                 publicStr.length >= baseStr.length && (baseStr = [...publicStr]);
//                 let indexnum = publicStr.indexOf(item);
//                 publicStr = publicStr.slice(indexnum + 1);
//                 publicStr.push(item);
//             }else{
//                 publicStr.push(item);
                
//             }
//         }          
//     })
//     publicStr.length >= baseStr.length && (baseStr = [...publicStr]); 
//     return baseStr.join('').length;
// };
// let str = 'dvdf';
// let result = lengthOfLongestSubstring(str);


// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
// 字符串转换整数 (atoi)

// let myAtoi = function(str) {
//     let udpStr = str.trim();
//     let StrSpiltArr = udpStr.split('');
//     let resStr = '';
//     let newNumArr = [];
//     let openFlag = false; // + - 号是否存在
//     let len = StrSpiltArr.length;
//     for(let i = 0 ;i < len ; i++){
//         if(i == 0 && !(StrSpiltArr[i] >=0 && StrSpiltArr[i] <=9) && (StrSpiltArr[i] != '-' && StrSpiltArr[i] != '+') || StrSpiltArr[i] == ""){    
//             resStr = 0;
//             break;
//         }else if(StrSpiltArr[i] == " "){
//             break
//         }
//         if((StrSpiltArr[i] == '-' || StrSpiltArr[i] == '+') && !openFlag){
//             newNumArr.push(StrSpiltArr[i]);
//             openFlag = true;
//         }else if(StrSpiltArr[i] >=0 && StrSpiltArr[i] <=9){
//             newNumArr.push(StrSpiltArr[i]);
//             openFlag = true;
//         }else{
//             break;
//         }    
//     }
//     if(newNumArr.length > 1){  // 处理整数溢出情况
//         let symbol = 1;
//         let num = 0;
//         resStr = newNumArr.join('');
//         for(let i =  0; i < resStr.length; i++){
//             if (/\d/.test(resStr[i])){
//                 let tmp = Number(resStr[i]);
//                 if (num > 0x0CCCCCCC || (num === 0x0CCCCCCC && tmp > 7)) {
//                     //正溢出
//                     resStr = 0x7FFFFFFF;
//                     break;
//                 }
//                 if (num < -0x0CCCCCCC || (num === -0x0CCCCCCC && tmp > 8)) {
//                     //负溢出
//                     resStr = -0x80000000;
//                     break;
//                 }
//                 num = (num << 3) + (num << 1) + symbol * tmp;
//             }
//             else if(resStr[i] == '-'){
//                 symbol = -1;
//             }else if(resStr[i] == '+'){
//                 symbol = 1;
//             }    
//         }
//         return resStr
//     }else if(newNumArr.length){
//         resStr = newNumArr.join('');
//     }
//     return resStr = newNumArr.length ? newNumArr == '-' || newNumArr == '+' ? 0 : parseInt(resStr) : 0 ;
// };
// let result = myAtoi('0-1');


