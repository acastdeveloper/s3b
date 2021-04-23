"use strict";

var str="Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";



// Modifacions prèvies per facilitar filtrats posteriors
const regex= /\(|\)/gi;
var str2=str.replace(","," ").replace(":"," ").replace(regex," ").replace(/ñ/gi,"n");

// Matriu de paraules minusculitzades separades
var strArr=str2.toLowerCase().split(" ");

// Funció que verifica si una paraula té @
function hihaArroba(p) {
    if(p.indexOf("@")!=-1) {return true;}
}

// Matriu de les paraules que contenen @
var strArrArroba = strArr.filter(e=>hihaArroba(e));

// Funció que verifica si compté almenys un punt
function hihaPunt(p) {
    if(p.indexOf(".")!=-1) {return true;}
}

function compta(p) {
    let c=0;

    for(let i=0;i<motRix.length;i++) {
        if(motRix[i]==p) { c++; }
    }
    return c;
}

//Matriu de les paraules amb @ que contenen almenys 1 punt
var strArrArrobaPunt=strArrArroba.filter(e=>hihaPunt(e));

var mapStrArrArrobaPunt=new Map();


strArrArrobaPunt.forEach(e=>{
    mapStrArrArrobaPunt.set(e,"");
});


let strEmails=mapStrArrArrobaPunt.keys();
let strEmailsArray=Array.from(strEmails);

console.log(mapStrArrArrobaPunt.size);
console.log(strEmailsArray);
