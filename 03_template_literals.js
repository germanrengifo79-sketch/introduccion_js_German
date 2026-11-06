// ===== Ejercicio 6: Reescribir el Ejercicio 2 usando template literals =====
let animal = "perro";
let raza = "Labrador";
let edadAnimal = 5;

// Usando comillas invertidas ` ` y ${}
console.log(`Mi ${animal} es un ${raza} de ${edadAnimal} años.`);


// ===== Ejercicio 7: Ficha de presentación de varias líneas =====
let nombre = "Germán Rengifo"; // Aquí puedes verificar o ajustar tus datos reales
let programaFormacion = "Análisis y Desarrollo de Software"; 
let numeroFicha = "2834567"; 
let ciudad = "Bello"; 

// Un solo console.log respetando los saltos de línea normales con las comillas invertidas
console.log(`FICHA DE PRESENTACIÓN
Nombre: ${nombre}
Programa: ${programaFormacion}
Número de Ficha: ${numeroFicha}
Ciudad: ${ciudad}`);

// ===== Ejercicio 8: Cálculo del total a pagar con signo $ =====
let producto = "Audífonos";
let cantidad = 3;
let precioUnitario = 15000;

// Calculamos la operación directamente dentro de ${} y usamos $$ para que el primero imprima el signo $
console.log(`Total a pagar: $${cantidad * precioUnitario}`);


// ===== Ejercicio 9: Corrección de error (Uso de comillas invertidas) =====
let ciudadCorrecta = "Bogotá";
let temperatura = 14;

// El código original usaba comillas dobles " ", lo corregimos usando comillas invertidas ` `
console.log(`La temperatura en ${ciudadCorrecta} es de ${temperatura} °C`);
