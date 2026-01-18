// let x = 0.43 ;
// let y = 1.11 ;
// let z = 0.75 ;
// let min = Math.min(x,y,z);
// if (x < 1 && y < 1 && z < 1 ) {
//     x =(y + z) / 2;
//     console.log(x,y,z);
// } else if (y < x && y <z) {
//     y =(x + z) / 2;
//     console.log(x,y,z)
// }else {
//     z = (x + y) / 2;
//     console.log(x,y,z)
// }
// let n = 9;
// let i = 1;
// let sum = 0;
// while(i <=n){
//     sum +=;
//     i++;
// }

// let x = 10;
// let y = 134;
// let sum = 0;
// for (let i = 11; i <= 133; i += 2) {
//     sum += i;
// }
// console.log(sum);

// let n = 2;
// let i = 1;
// let sum = 0;
// while( i <= n) {
//     sum = sum + Math.sin(i) / 2**i;
//     i++;
// }
// console.log(sum)


// let n = 2;
// let i = 1;
// let sum = 0;
// while(i <= n ){
//     sum = sum - 1 + Math.sin(i) / 2**i;
//     i++;
// }
// console.log(sum)

let x = -13.07; 
let y = 6.16;   

if (x < 0 && y < 0) {
    x = Math.abs(x);
    y = Math.abs(y);
} else if ((x < 0 && y >= 0) || (x >= 0 && y < 0)) {
    x += 0.5;
    y += 0.5;
} 
console.log("x:", x);
console.log("y:", y);