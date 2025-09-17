

function removeDuplicates(arr){
    let newArr = [];
    const length = arr.length;
    for(let i = 0; i < length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeDuplicates([1,2,3,4,5,2,3,8,9,11]));
console.log(removeDuplicates(['a', 'b', 'a', 'c']));
console.log(removeDuplicates([1,'1',1]));
console.log(removeDuplicates([]))
console.log(removeDuplicates([true, false, true]))