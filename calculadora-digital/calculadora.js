const prompt = require("prompt-sync")({ sigint: true });

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 == 0) {
        return "Ingresa un número valido";
    } else {
        return num1 / num2;
    }
}

function potencia(num1, num2){
    return num1 ** num2;
}

let historial = [] 

console.log("Bienvenido a la calculadora digital");

while (true) {
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Potencia")
    console.log("6. Mostrar el historial de operaciones")
    console.log("0. Salir")

    let opción = parseInt(prompt("Indique la operación que quiera realizar:"));

    if (opción === 0) {
        console.log("Nos vemos!");
        break; 
    }
    
    let numero1;
    let numero2;
    let rdo;

    switch (opción) {
        case 1:
            numero1 = parseInt(prompt("Numero 1: "));
            numero2 = parseInt(prompt("Numero 2: "));
            rdo = suma(numero1, numero2);
            console.log("\x1b[32m%s\x1b[0m","El resultado es: " + rdo);
            historial.push(`\nSuma: \n${numero1} + ${numero2} = ${rdo}`);
            break;
        case 2:
            numero1 = parseInt(prompt("Numero 1: "));
            numero2 = parseInt(prompt("Numero 2: "));
            rdo = resta(numero1, numero2);
            console.log("\x1b[32m%s\x1b[0m","El resultado es: " + rdo);
            historial.push(`\nresta: \n${numero1} - ${numero2} = ${rdo}`);
            break;
        case 3:
            numero1 = parseInt(prompt("Numero 1: "));
            numero2 = parseInt(prompt("Numero 2: "));
            rdo = multiplicacion(numero1, numero2);
            console.log("\x1b[32m%s\x1b[0m","El resultado es: " + rdo);
            historial.push(`\nMultipliación: \n${numero1} * ${numero2} = ${rdo}`);
            break;
        case 4:
            numero1 = parseInt(prompt("Numero 1: "));
            numero2 = parseInt(prompt("Numero 2: "));
            rdo = division(numero1, numero2);
            if (typeof rdo === "string") {
            console.log(rdo);
            }
            else {
            console.log("\x1b[32m%s\x1b[0m","El resultado es: " + rdo);
            historial.push(`\nDivisión: \n${numero1} / ${numero2} = ${rdo}`);
            }
            break;
        case 5:
            numero1 = parseInt(prompt("Numero 1: "));
            numero2 = parseInt(prompt("Numero 2: ")); 
            rdo = potencia(numero1, numero2);
            console.log("\x1b[32m%s\x1b[0m","El resultado es: "+ rdo);
            historial.push(`\nPotencia: \n${numero1} ** ${numero2} = ${rdo}`);
            break;
        case 6: 
            if (historial.length === 0) {
                console.log("No hay operaciones registradas en el historial.");
            } else {
                console.log("\x1b[91m%s\x1b[0m","Historial de operaciones: " + historial);
            }
            break
        default:
            console.log("Opción no válida. Elija un Número del 1 al 6 o 0 para Salir.");
            break;
    }
}