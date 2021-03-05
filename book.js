
// 最优装载问题
function findMaxthing(arr,maxWeight) {
    let sortArr = arr.sort((a,b)=>{
        return a >= b ? 1 : -1;
    });
    let allnum = 0;
    let maxnum = 0;
    let finmaxFlag = false;
    sortArr.forEach((item,index)=>{
        allnum += item;
        if(allnum >= maxWeight && !finmaxFlag) {
            maxnum = index;
            finmaxFlag = true;
        } 
    })
    return maxnum;
}
let result = findMaxthing([4,10,7,11,3,5,14,2],30);
console.log('result', result)

