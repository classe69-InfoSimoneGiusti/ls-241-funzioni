

const numeroDaControllare = 56;

const pariDispari = controllaPariDispari( numeroDaControllare );

if ( pariDispari == 'pari') {
    alert('il numero è pari!');
} else {
    alert('il numero è dispari!');
}







function controllaPariDispari( numero ) {

    if ( numero % 2 == 0 ) {
        return 'pari';
    } else {
        return 'dispari';
    }

}

















