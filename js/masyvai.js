/*----------1----------*/
console.log('-----1-----');
const arrLength = 20;
let arr = [];
for (let i = 0; i < arrLength; i++) {
    arr[i] = i+1;
}
console.log(arr);

/*----------2----------*/
console.log('-----2-----');
const arr2Length = Math.floor(Math.random() * (60 - 40) ) + 40;
let arr2 = [];
for (let i = 0; i < arr2Length; i++) {
    arr2[i] = i+1;
}
console.log(arr2);

/*----------3----------*/
console.log('-----3-----');
const arr3Length = Math.floor(Math.random() * (15 - 10) ) + 10;
let arr3 = [];
for (let i = 0; i < arr3Length; i++) {
    arr3[i] = Math.floor(Math.random() * (47 - 5) ) + 5;
}
console.log(arr3);

let maxValue = arr3[0];
for (let i = 0; i < arr3.length; i++) {
    if(maxValue < arr3[i])
        maxValue = arr3[i];    
}
console.log(`Didziausia masyvo reiksme ${maxValue}`);

/*----------4----------*/
console.log('-----4-----');
const arr4Length = 100;
const reiksmes = ['D', 'E', 'F', 'G', 'H\.2O']
let arr4 = [];
for (let i = 0; i < arr4Length; i++) {
    arr4[i] = reiksmes[Math.floor(Math.random() * 5 )];
}
console.log(arr4);

/*----------5----------*/
console.log('-----5-----');
const arr5Length = 100;
const reiks = ['M', 'N', 'O', 'P']
let arr5 = [];
for (let i = 0; i < arr5Length; i++) {
    arr5[i] = reiks[Math.floor(Math.random() * 4 )];
}
console.log(arr5);

let daugiausia = 0;
let kartojas;
for (let i = 0; i < reiks.length; i++) {
    let count = 0;
    for (let j = 0; j < arr5.length; j++) {
        if(reiks[i] === arr5[j])
            count++;
    }
    if(daugiausia < count){
        kartojas = reiks[i];  
        daugiausia = count;
    }
}
console.log('Daugiausiai kartojos raide: ' + kartojas);

/*----------6----------*/
console.log('-----6-----');
const arr6Length = 20;
let arr6 = [];
for (let i = 0; i < arr6Length;) {
    let sk = randomNumber();
    if(!arr6.includes(sk)){
        arr6[i] = sk;
        i++;
    }
    
}
console.log(arr6);

function randomNumber() {
    return Math.floor(Math.random() * (50 - 10) ) + 10;
}