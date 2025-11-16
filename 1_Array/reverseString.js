
let reverseString = function(s){
    let len = s.length;
    let halfLen = Math.floor(len / 2);
    for(let i = 0; i < halfLen; i++){
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
}

let s = ['I', 'l', 'o', 'v', 'e', 'y', 'o', 'u']
reverseString(s)
console.log(s)


// revise

let reverseArray = function(arr){
    let len = arr.length;
    let halfLen = Math.floor(len/2);

    for(let i = 0; i < halfLen; i++){
        let temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
}

let arr = ['I', 'love', 'you', 'jan'];
reverseArray(arr)
console.log(arr)