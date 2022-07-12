/* GLOBALI */

let let_global = 5;
var var_global = 5;

/* Scope IF --- con for o while succede la stessa cosa */
if (true) {
    console.log(let_global);
    console.log(var_global);
    
    let let_if = 10;
    var var_if = 20;
}

// console.log(let_if); // non visibile fuori dal blocco if
console.log(var_if); // visibile fuori dal blocco if


/* scope function */

function prova(variabile_funzione) {
    let let_func = 30;
    var var_func = 40;
    globalissima_func = 50;
}

prova();

// console.log(let_func); // non visibile fuori dal blocco funzione
// console.log(var_func); // non visibile fuori dal blocco funzione
console.log(globalissima_func); // visibile fuori dalla funzione 😖
