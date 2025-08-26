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