//Simple for loop
/*
for(let i=1 ; i<=10 ; i++){
    console.log(i);
}
*/

//for ... of loop
/*
const array =["Red","Green","Blue","Yellow","Pink"];
for (const color of array){
    console.log(color);
}
*/

// Const cannot be re-initialized, so it will throw an error if we try to reassign a value to it. In the case of the for loop, we cannot use const for the loop variable because it needs to be updated in each iteration. Instead, we should use let or var for the loop variable. Here's the corrected code:
/*
const number = [1,2,3,4,5,6,7,8,9,10];
for (const i=0; i<number.length;i++){
    console.log(number[i]);
}
*/

const number = [1,2,3,4,5,6,7,8,9,10];
for (let i=0; i<number.length;i++){
    console.log(number[i]);
}