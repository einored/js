/*-----1-----*/
const n = 20;
if (n >= 0) {
    console.log('Geras');
}
else
    console.log('Blogas');

/*-----2-----*/
const light = 2;
if (light === 1) {
    console.log('Eikite');
}
else
    console.log('Palaukite');

/*-----3-----*/
const d = 3;
const k = 18;
const dSize = 5;
const fit = d * dSize - k;
if (fit >= 0) {
    console.log('Knygos telpa į dėžes');
}
else
    console.log('Knygos netelpa į dėžes');

/*-----4-----*/
let a = 12;
let b = 3;
if (a > b) {
    a--;
    b++;
    console.log(`a = ${a}; b = ${b}`);
}
else{
    a++;
    b--;
    console.log(`a = ${a}; b = ${b}`);
}

/*-----5-----*/
const c = 50;
const p = 200;
let m = c;
const quantity = Math.floor(c/p);
if(c > p){
    m = c%p;
}
console.log(`Saulius nusipirks ${quantity} porcijas, liks centų ${m}`);

/*-----6-----*/
const degt = 6;
if (degt%3 === 0) {
    console.log(`Trikampį sudėlioti galima`);
}
else
    console.log(`Trikampį sudėlioti negalima`);

/*-----7-----*/
const men = 5;
const yearArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (men > 0 && men < 13) {
    console.log(`d = ${yearArr[men-1]}`);
}

/*-----8-----*/
const kaul = 4;
if (kaul === 1 || kaul === 3 || kaul === 5) {
    console.log(`kambarį tvarko jaunėlis`);
}
else if (kaul === 2 || kaul === 4 || kaul === 6) {
    console.log(`kambarį tvarko vyresnėlis`);
}

/*-----9-----*/
const olimpYear = 1904;
const nr = (olimpYear-1896)/4+1;
if ((olimpYear-1896)%4 === 0) {
    console.log(`n = ${nr}`);
}
else
    console.log(`Metai neolimpinia`);

/*-----10-----*/
const v1 = 8;
const m1 = 29;
const m2 = 23;
const v = 9;
const mm = 5;
const vm = (v*60+5)-(v1*60+m1+m2);
if (vm >= 0) {
    console.log(`Petras į pamoką nepavėluos`);
}
else
    console.log(`Petras į pamoką pavėluos`);