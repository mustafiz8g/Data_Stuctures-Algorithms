
//Write a function that returns the count of digits in a number;

function countDigits(n){
    let count = 0;
    while(n > 0){
        n = Math.floor( n/10)
        count++;
    }
    return count
}

let num = 2334323233;
let result = countDigits(num);
console.log(result)


// problem solve if n = 0;
function countDigits2(n){
    if(n=== 0) return 1
    let count = 0;
    while(n > 0){
        n = Math.floor( n/10)
        count++;
    }
    return count
}

let num2 = 0;
let result2 = countDigits2(num2);
console.log(result2)

// corner case 3 if n = negative number

function countDigits3(n){
    if(n === 0) return 1;
    
    // converting negative number to positive 
    n = Math.abs(n);
    
    let count = 0;

    while(n > 0){
        n = Math.floor( n/10)
        count++;
    }
    return count
}

let num3 = -933;
let result3 = countDigits3(num3);
console.log(result3)