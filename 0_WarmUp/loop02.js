// write a function that searches for an element in an array and returns the index, if the element is not present than return -1

function searchElement ( arr , element) {
    let length = arr.length;
   for(i = 0 ; i < length; i++) {
    if(arr[i] === element) {
        return i
    }
  }
  return -1
}

let arr = [2,3,6,2,67,34];

const result = searchElement(arr, 2);

console.log(result)


// If you want to find all indices (because your array has duplicates like [2,3,6,2,67,34] where 2 appears twice), you could modify it like this: 

function searchAllElement(arr, element){
    let length = arr.length;
    let indices = [];
    for(let i = 0 ; i < length ; i++) {
        if(arr[i] === element){
            indices.push(i)
        }
    }
    return indices.length > 0 ? indices : -1
}

console.log(searchAllElement(arr, 2))



// write a function that that returns  odd numbers in an array


function oddNumbers(...numbers){
    let length = numbers.length;
    let nNumbers = [];
    for( let i = 0; i < length; i++) {
        if(numbers[i] % 2 === 1){
            nNumbers.push(numbers[i])
        }
    }
    return nNumbers;
}

console.log(oddNumbers(2,3,62,-33, 45,32,12,67,43))

// return negative numbers

function negativeNumber(...numbers){
    let length = numbers.length;
    let nNumbers = [];
    for( let i = 0; i < length; i++) {
        if(numbers[i] < 0){
            nNumbers.push(numbers[i])
        }
    }
    return nNumbers;
}

console.log(negativeNumber(2,3,62,-33, 45,-32,12,67,-43))


// counrt negative numbers 

function countNegative(...numbers){
    let length = numbers.length;
    let count = 0;
    for( let i = 0; i < length; i++) {
        if(numbers[i] < 0){
         count++   
        }
    }
    return count;
}

console.log(countNegative(2,3,62,-33, 45,-32,12,67,-43))



 // Write a function that returns the largest number in an array

 function findLargest(numbers){
    let length = numbers.length;
    let largestNumber = -Infinity;
    for(let i = 0; i < length; i++){
        if(numbers[i] > largestNumber){
            largestNumber = numbers[i]
        }
    }
    return largestNumber
 }

 console.log(findLargest([1,2,6,2,0,7,11,78,34,232,323,67,3]))



 function  findSmallest (numbers) {
     let length = numbers.length;
     let smallest = Infinity;
     for( let i = length ; i >= 0 ; i--){
        if( numbers[i] < smallest){
            smallest = numbers[i]
        }
     }
     return smallest ;
 }

 console.log(findSmallest([3,34,7,34,2,8,34,8,36,7]));


 // find the second largest number in an array
 function secondLargest(arr){
    if(arr.length < 2){
        return 'Array must have at least two elements'
    }

    let largest = -Infinity;
    let second = - Infinity;

    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest){
            second  = largest;
            largest = arr[i];
        }
        else if(arr[i] > second && arr[i] < largest){
            second = arr[i];
        }
    }
   
    return second  === -Infinity ? 'No second largest (all elements equal)' : second;
    
   
 }

 console.log(secondLargest([3,34,7,34,2,8,34,8,36,7]));
 console.log(secondLargest([3,3,3,3,3]));







