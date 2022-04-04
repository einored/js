/*----------1----------*/
console.log('\"1 Uzduotis\"')
for (let i = 0; i < 5; i++) {
    console.log(`${i+1}) Labas`);    
}

/*----------2----------*/
console.log('\"2 Uzduotis\"')
for (let i = 0; i < 5; i++) {
    console.log(i);    
}

/*----------3----------*/
console.log('\"3 Uzduotis\"')
for (let i = 0; i < 5; i++) {
    console.log(i*10);    
}

/*----------4----------*/
console.log('\"4 Uzduotis\"')
for (let i = 0; i < 5; i++) {
    console.log(49+i);    
}

/*----------5----------*/
console.log('\"5 Uzduotis\"')
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 11));    
}

/*----------6----------*/
console.log('\"6 Uzduotis\"')
for (let i = 1; i <= 20; i++) {
    if(i%3 != 0)
        console.log(i);    
}

/*----------7----------*/
console.log('\"7 Uzduotis\"')
const sk = 3;
for (let i = 1; i <= 10; i++) {
    console.log(sk*i);    
}

/*----------8----------*/
console.log('\"8 Uzduotis\"')
const n = 3;
for (let i = 1; i <= n; i++) {
    console.log(`${i} inch = ${i*2.54} cm`);    
}

/*----------9----------*/
console.log('\"9 Uzduotis\"')
const nMetai = 5;
let indelis = 100;
for (let i = 1; i <= nMetai; i++) {
    let palukanos = indelis * 0.02;
    indelis += palukanos;
    console.log(`${i} metai: palukanos = ${palukanos} €; indelis = ${indelis} €`);    
}

/*----------10----------*/
console.log('\"10 Uzduotis\"')
const metaiNuo = 1800
const metaiIki = 2022;
for (let i = metaiNuo; i <= metaiIki; i++) {
    if(i%100 != 0 && i%4 === 0){
        console.log(i);
    }
    else if(i%100 === 0 && i%400 === 0){
        console.log(i);
    }
}