/*-------------------------------*/
const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
}

console.log('Petras: ', average(petras));
console.log('Maryte: ', average(maryte));
console.log('Jonas: ', average(jonas));
console.log('Ona: ', average(ona));

/*-------------------------------*/
function nameAnaly(name) {
    return `Vardo "${name}" pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu`;
}

console.log(nameAnaly('Petras'));
console.log(nameAnaly('Jonas'));
console.log(nameAnaly('Ona'));