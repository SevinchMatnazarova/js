let x = 0.43 ;
let y = 1.11 ;
let z = 0.75 ;
let min = Math.min(x,y,z);
if (x < 1 && y < 1 && z < 1 ) {
    x =(y + z) / 2;
    console.log(x,y,z);
} else if (y < x && y <z) {
    y =(x + z) / 2;
    console.log(x,y,z)
}else {
    z = (x + y) / 2;
    console.log(x,y,z)
}