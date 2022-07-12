const email = [ 'info@pippo.it', 'info@pluto.it', 'info@paperino.it'] ;

const emailDaVerificare = 'info@gastone.com';

let accessoConsentito = false;

for (let i = 0; i < email.length; i++) {
    let pippo;
    if (email[i] == emailDaVerificare) {
        accessoConsentito = true;
    }
}

if (accessoConsentito == true) { 
    alert('Accesso consentito');
} else {
    alert('Accesso NON consentito');
}

