/*
let wallet = 0;
console.log(wallet);
wallet = 5;
console.log(wallet);

const number = 321432
const number2 = number
console.log(number);
console.log(number2);
*/

/*----------Kintamųjų inicijavimas----------*/
/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis*/
const n1 = 11;
console.log(n1);
const n2 = 2222;
console.log(n2);
const n3 = 333333;
console.log(n3);

/*Sukurti 3 kintamuosius su teksto tipo reikšmėmis*/
const t1 = 'java';
console.log(t1);
const t2 = 'rytas';
console.log(t2);
const t3 = 'vakaras';
console.log(t3);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis*/
const arrayN = [1, 2, 3, 4, 5];
console.log(arrayN[0]);
console.log(arrayN[1]);
console.log(arrayN[2]);
console.log(arrayN[3]);
console.log(arrayN[4]);
console.log(arrayN);

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis*/
const arrayT = ['labas', 'vakaras', 'naktis', 'saule', 'menulis'];
console.log(arrayT[0]);
console.log(arrayT[1]);
console.log(arrayT[2]);
console.log(arrayT[3]);
console.log(arrayT[4]);
console.log(arrayT);

/*----------Veiksmai su kintamaisiais----------*/
/*Susumuoti visus skaičiaus tipo kintamuosius*/
let sumN = n1 + n2 + n3;
console.log(sumN);

/*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas*/
let wordT = t1 + ' ' + t2 + ' ' + t3;
console.log(wordT);

/*Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką*/
let calc = arrayN[0] - arrayN[1] + arrayN[2] - arrayN[3] + arrayN[4];
console.log(calc);

/*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/
let textJoin = arrayT[0] + ', ' + arrayT[1] + ', ' + arrayT[2] + ', ' + arrayT[3] + ', ' + arrayT[4];
console.log(textJoin);

/*----------Kintamųjų palyginimas----------*/
const nr1 = 1;
const nr2 = 2;

if(nr1 > nr2){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(nr1 < nr2){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(nr1 == nr2){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(nr1 != nr2){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(nr1 >= nr2){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(nr1 <= nr2){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

const tekst1 = 'dsfaf';
const tekst2 = 'brnertaser';

console.log(tekst1.length);
console.log(tekst2.length);

if(tekst1.length > tekst2.length){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(tekst1.length < tekst2.length){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(tekst1.length == tekst2.length){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(tekst1.length != tekst2.length){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(tekst1.length >= tekst2.length){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

if(tekst1.length <= tekst2.length){
    console.log('Pomidoras');
}
else{
    console.log('Bandykite kitą kartą.');
}

let textJoin2 = arrayT[0].length + ', ' + arrayT[1].length + ', ' + arrayT[2].length + ', ' + arrayT[3].length + ', ' + arrayT[4].length;
console.log(textJoin2);

const from = -2;
const to = 100;
let ats = 0;
for(let i = from; i <= to; i++){
    ats += i;
    console.log(ats);
}
console.log(ats);

const textNorm = 'asdfg';
let textInv = '';
for (let index = textNorm.length - 1; index >= 0; index--) {
    textInv += textNorm[index];
}
console.log(textInv);