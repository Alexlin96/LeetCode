// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。注意 1 不对应任何字母。
// 电话号码的字母组合  
// 做法：递归
// let letterCombinations = function(digits) {
//     if(digits == "") return []
//     const numObjMap = {
//         '1':[],
//         '2':['a','b','c'],
//         '3':['d','e','f'],
//         '4':['g','h','i'],
//         '5':['j','k','l'],
//         '6':['m','n','o'],
//         '7':['p','q','r','s'],
//         '8':['t','u','v'],
//         '9':['w','x','y','z'],
//     }
//     let Arr = []; 
//     function calBackFn(params,result) {
//         if(params.length == 0 ){
//             Arr.push(result);
//             return
//         }
//         let arr = numObjMap[params[0]];
//         for (let i = 0 ; i < arr.length;i++){
//             calBackFn(params.slice(1),result + arr[i])
//         }

//     }
//     calBackFn(digits,'');
//     return Arr;
// };
// let result = letterCombinations('256')
// console.log('result',result)


// -------------------------------------------------------------------------------------
//给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
//注意：答案中不可以包含重复的三元组。
// 三数之和
let threeSum = function(nums) {
    nums.sort((a,b)=> a-b);  // 排序 ，左边最小
    let len = nums.length;
    let newArr = [];
    if(nums[0] > 0 || nums[len-1] < 0){  // 数组全部是负数或者正数的时候 无解返回[]
        return [];
    }
    if(len == 3 ){
        let resultNum = nums.reduce((a,b)=>{
            return a+b;
        })
        return resultNum == 0 ? [...nums] : [];
    }
    for(let i = 0;i < len-1; i++){  // 首尾查找 最近和最远
        let first = i+1;
        let last = len-1;
        
        function deepFinds(first,last) {
            let resNum = nums[i] + nums[last] + nums[first];
            if(first >= last) return;
            if(resNum == 0){
                newArr.push([nums[i],nums[last],nums[first]])
                return
            }else{
                if(resNum <= 0){
                    first++;
                }else{
                    last--;
                }
                deepFinds(first,last)
            }            
        }
        deepFinds(first,last)
    }
    return [...newArr];
    
};
let result = threeSum([0]);
console.log(result)