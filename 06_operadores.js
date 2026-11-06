// ===== Ejercicio 1: Área de un rectángulo =====
let base = 10;
let altura = 5;
let area = base * altura;
console.log("Área del rectángulo:", area); // Debería dar 50

// ===== Ejercicio 2: Operadores de comparación =====
let num1 = 10;
let num2 = 20;
console.log("¿num1 es menor que num2?:", num1 < num2); // Debería dar true

// ===== Ejercicio 3: Operadores lógicos (&& y ||) =====
let esMayor = true;
let esPar = false;
console.log("Resultado con && (AND):", esMayor && esPar); // Da false porque ambos deben ser true
console.log("Resultado con || (OR):", esMayor || esPar);  // Da true porque al menos uno es true

// ===== Ejercicio 4: Operadores de asignación (Incremento) =====
let valor = 10;
valor += 5; // Equivale a: valor = valor + 5
console.log("Valor incrementado:", valor); // Debería dar 15

// ===== Ejercicio 5: Expresión compuesta (Número positivo y par) =====
let numero = 8;
// Verifica que sea mayor que cero Y que el residuo de dividir entre 2 sea cero
let esPositivoYPar = numero > 0 && numero % 2 === 0;
console.log("¿El número es positivo y par?:", esPositivoYPar); // Debería dar true
