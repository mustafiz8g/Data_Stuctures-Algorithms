// star pattern

let n = 4;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < n ; j ++){
        row = row + '*'
    }
    console.log(row)
}
 
/**   Output
****
****
****
****
 */
let nu = 5;
for(let i = 0; i < nu; i++){
    let row = '';
    for(let j = 0; j <= i; j++){
        row = row + (j+1)
    }
    console.log(row)
}

/**
 * OUtput
1
12
123
1234
12345
 */

let num = 5;
for(let i = 0 ; i <= num; i++){
    let row = '';
    for(let j = 0; j < i; j++){
        row = row + i

    }
    console.log(row)
}
 
/**  Output
1
22
333
4444
55555
 */

let numb = 5; 
for(let i = 0 ; i < numb; i++){
    let row = '';
    for(let j = 0; j < numb-i; j++){
        row = row + (j+1)
    }
    console.log(row)
}
/**  Output
12345
1234
123
12
1
 */


let numbe = 5; 
for(let i = 0 ; i < numbe; i++){
    let row = '';
    for(let j = 0; j < numbe-i; j++){
        row = row + '*'
    }
    console.log(row)
}
 
/**  Output
*****
****
***
**
*
 */

let number = 5;
for(let i = 0; i < number; i++){
    let row = '';
    for(let j = 0 ; j < number-(i+1) ; j++){
        row = row + '-' 
    }
    for(let k= 0; k < i+1; k++){
        row = row + '*'
    }
    console.log(row)
}
/**
----*
---**
--***
-****
*****
 */


let x = 5; 
for(let i = 0; i < x; i++){
    let row = '';
    let toggle = 1;
    for(let j = 0; j < i+1; j++){
        row = row + toggle;
        if(toggle === 1){
            toggle = 0
        }
        else{
            toggle = 1
        }
    }
    console.log(row)
}

/*
1
10
101
1010
10101
*/

let y = 5; 
let toggle = 1;
for(let i = 0; i < y; i++){
    let row = '';
    for(let j = 0; j < i+1; j++){
        row = row + toggle;
        if(toggle === 1){
            toggle = 0
        }
        else{
            toggle = 1
        }
    }
    console.log(row)
}

/**
1
01
010
1010
10101
 */