

let removeDuplicates = function(nums){
    if(nums.length === 0) return 0;

    let x = 0; // last uniqe index
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[x]){
           x++;
           nums[x] = nums[i];
        }
    }
    return x + 1;
}

console.log(removeDuplicates(nums = [1,1,2,3,3,5]
))



let removeDuplicates2 = function(nums){
    const length = nums.length;
    let x = 0;
    for(let i = 0; i < length; i++ ){
        if(nums[i] > nums[x]){
            x++;
            nums[x] = nums[i]
        }
    }
    return x + 1;
}
console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]))