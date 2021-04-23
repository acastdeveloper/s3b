"use strict";
const mot = "alexander";
const motRix = mot.toUpperCase().split("");
const mapMot = new Map();


/* EXERCICI 01 */
function exercici01() {
    motRix.forEach(e => {
        console.log(e);
    });
}
//exercici01();

/* EXERCICI 02 */
function exercici02() {
    let vocals = "aeiou"
    motRix.forEach(e => {
        // Esbrinar si és un número
        if (/[0123456789]/.test(e)) {
            console.log("Els noms no contenen números");
        }

        // Esbrinar si aquell caracter és vocal
        if (/[AEIOU]/.test(e)) {
            console.log("He trobat la vocal: " + e);
        }

        // Esbrinar si aquell caracter és consonant
        // Esbrinar si aquell caracter és vocal
        if (/[BCDFGHJKLMNPQRSTVWXYZ]/.test(e)) {
            console.log("He trobat la consonant: " + e);
        }
    });
}
// exercici02();

/* EXERCICI 03 */
function compta(p) {
    let c = 0;

    for (let i = 0; i < motRix.length; i++) {
        if (motRix[i] == p) {
            c++;
        }
    }
    return c;
}

function exercici03() {
    motRix.forEach(e => {
        mapMot.set(e, compta(e));
    });

    console.log(mapMot);

}
//exercici03();

/* EXERCICI 04 */
function exercici04() {
    let name = "alexander";
    let surname = "castello";
    let nameArray = name.split("");
    nameArray.push(" ");
    let surnameArray = surname.split("");
    let fullName = nameArray.concat(surnameArray);
    console.log(fullName);
}
exercici04();
