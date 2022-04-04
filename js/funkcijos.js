/*----------1----------*/
console.log('\"1 Uzduotis\"')
function sum(n1, n2) {
    return n1+n2;
}
const sk1 = 3;
const sk2 = 15;
console.log(`${sk1} + ${sk2} = ${sum(sk1, sk2)}`);

/*----------2----------*/
console.log('\"2 Uzduotis\"')
function compare(k1, k2) {
    if (k1 > k2) {
        console.log('Pirmas skaicius didesnis');
    }
    else if(k1 < k2){
        console.log('Antras skaicius didesnis');
    }
    else
        console.log('Skaiciai lygus');
}
compare(12, 14);

/*----------3----------*/
console.log('\"3 Uzduotis\"')
function keliamieji(m){
    if((m%100 != 0 && m%4 === 0) || (m%100 === 0 && m%400 === 0)){
        console.log(`${m} metai yra keliamieji`);
    }
    else 
    console.log(`${m} metai nera keliamieji`);
}
keliamieji(2020);

/*----------4----------*/
console.log('\"4 Uzduotis\"')
function kvadratas(sk){
    console.log(`skaiciaus ${sk} kvadratas = ${sk * sk}`);
    
}
kvadratas(20);

/*----------5----------*/
console.log('\"5 Uzduotis\"')
function skaiciuSuma(sk){
    if(sk < 1)
        console.log('ivestas skaicius mazesnis uz 1')
    else{
        let sum = 0;
        for (let i = 1; i <= sk; i++) {
            sum += i;
        }
        console.log(sum);
    }
}
skaiciuSuma(4);

/*----------6----------*/
console.log('\"6 Uzduotis\"')
function dalikliai(sk){
    let dal = 0;
    for (let i = 1; i < sk; i++) {
        if(sk%i === 0)
            dal++;      
    }
    console.log(`Skaicius ${sk} dalinasi is ${dal} skaiciu`);
}
dalikliai(20);

/*----------7----------*/
console.log('\"7 Uzduotis\"')
function tekstas(tekst) {
    console.log(`Tekstas \"${tekst}\" sudarytas is ${tekst.length} simboliu`);
}
tekstas('Jonas123');

/*----------8----------*/
console.log('\"8 Uzduotis\"')
function telefonoNumeris(mas10){
    let stringNr = '';
    for (let i = 0; i < mas10.length; i++) {
        if(stringNr.length === 0)
            stringNr += '(' + mas10[i];
        else if(stringNr.length === 4)
            stringNr += ') ' + mas10[i];
        else if(stringNr.length === 9)
            stringNr += '-' + mas10[i];
        else
            stringNr += mas10[i]
    }
    console.log(stringNr);
}
const telNrMas = [3, 7, 0, 6, 7, 4, 5, 3, 4, 2, 3];
telefonoNumeris(telNrMas);

/*----------9----------*/
console.log('\"9 Uzduotis\"')
function textCompare(text1, text2){
    if(text1.length > text2.length)
        console.log(`Tekstas \"${text1}\" yra ilgesnis uz teksta \"${text2}\"`);
    else if(text1.length < text2.length)
        console.log(`Tekstas \"${text2}\" yra ilgesnis uz teksta \"${text1}\"`);
    else
        console.log(`Tekstai \"${text2}\" ir \"${text1}\" yra vienodo ilgio`);
}
textCompare('asd', 'sadfg');

/*----------10----------*/
console.log('\"10 Uzduotis\"')
function letterA(text){
    let a = 0;
    for (let i = 0; i < text.length; i++) {
        if(text[i] === 'a')
            a++;        
    }
    console.log(`Tekste \"${text}\" yra ${a} \"a\" raidziu`);
}
letterA('AaAsdgg');