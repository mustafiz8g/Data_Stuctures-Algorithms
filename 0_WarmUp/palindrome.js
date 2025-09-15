

// last digit => n % 10;
// remove last => n / 10;

   
const isPalindrome = (n) => {
    if(n < 0) return false;
    let nCopy = n;
    let rev = 0;
    while(n>0){
        let rem = n % 10;
        rev = (10*rev) + rem;
        n = Math.floor(n/10)
    }
    // if(rev === nCopy){
    //     return true
    // }
    // else{
    //     return false
    // }

    return rev === nCopy;
}
let number = 11211;
const result = isPalindrome(number);
console.log(result)



const isPalindrome1 = (s) => {
    if(typeof s !== 'string') s = String(s);
    // const cleaned = s;
    return s === s.split('').reverse().join('')
}
let number1 = 'mum';
const result1 = isPalindrome1(number1);
console.log(result1)


