//voglio generare 10 numeri casuali e metterli nella console

const min = 1;
const max = 90;

for ( let i = 0; i < 6; i++ ) {

    const numeroCasuale = getRandomNumberInRange(min, max);
    console.log( numeroCasuale );

}


/* 


const numeroCasuale = getRandomNumberInRange(20, 80);

if (numeroCasuale !== false ) {
    alert('Il numero casuale è: ' + numeroCasuale);
} else {
    alert('Dovevi inserire dei numeri, non delle stringhe!!');
}

 */


function getRandomNumberInRange(min, max) {

    if (typeof min == "number" && typeof max == "number") {
        // se volessi un numero casuale compreso tra 20 e 60;
        // genero un numero casuale compreso tra 0 e 40 (ovvero 60 max - 20 min) e ci aggiungo 20 (min) 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return false;
    }

}


