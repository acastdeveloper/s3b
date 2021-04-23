"use strict";
let mot="alexander131";
let motRix=mot.toUpperCase().split("");

/* EXERCICI 01 */
function exercici01() {
    motRix.forEach(e=>{ console.log(e); });
}

//exercici01();

/* EXERCICI 02 */
function exercici02() {
    let vocals = "aeiou"
    motRix.forEach(e=>{
        // Esbrinar si és un número
        if (/[0123456789]/.test(e)) {
            console.log("Els noms no contenen números");
        }

        // Esbrinar si aquell caracter és vocal
        if (/[AEIOU]/.test(e)) {
            console.log("He trobat la vocal: "+e);
        }

        // Esbrinar si aquell caracter és consonant
        // Esbrinar si aquell caracter és vocal
        if (/[BCDFGHJKLMNPQRSTVWXYZ]/.test(e)) {
            console.log("He trobat la consonant: "+e);
        }
    });
}

exercici02();
