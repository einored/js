/*----------1----------*/
console.log('-----1-----');
let suma = 0;
while (suma < 100) {
    suma += Math.floor(Math.random() * 10) + 1;
}
console.log(suma);

/*----------2----------*/
console.log('-----2-----');
let sum = 0;
while (sum % 7 !== 0 || sum === 0) {
    sum += Math.floor(Math.random() * 10) + 1;
}
console.log(sum);

/*----------3----------*/
console.log('-----3-----');
const m = 17;
let d = 0;
let s = 0;
let perskaityta = 0;
while (perskaityta < m) {
    if(perskaityta + (s+1) <= m){
        s += 1;
        perskaityta += s;
    }
    else{
        perskaityta += (m - perskaityta);
    }
    d += 1;    
    console.log(d + ' ' + s + ' ' + perskaityta);    
}
console.log(`Knygos skyrių skaičius: ${m}; knygą perskaitys per ${d} dienas(-u); vidutiniškai per dieną perskaitė ${Math.round((m / d) * 100) / 100} skyrius(-ų)`);

/*----------4----------*/
console.log('-----4-----');
let sk = 0;
while (sk !== 5) {
    sk = Math.floor(Math.random() * 11);
    console.log(sk);
}

/*----------5----------*/
console.log('-----5-----');
let skk = 0;
let ciklas = 0;
while (skk !== 5 && skk !== 7) {
    skk = Math.floor(Math.random() * 11);
    console.log(skk);
    ciklas++;
}
console.log(`Prasisuko ${ciklas} ciklas(-i)`);