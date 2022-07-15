// Ejercicio 1
// Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// alert('un mensaje')

// Ejercicio 2
// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). 

// document.write('hello world')

// Ejercicio 3
// Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// document.write(3 + 5)

// Ejercicio 4
// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

// let name = prompt('Cual es tu nombre?');
// alert (`Tu nombre es ${name}`)

// Ejercicio 5
// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// let num1 = parseInt(prompt('Escribe el primer numero'));
// let num2 = parseInt(prompt('Escribe el segundo numero'));
// console.log(num1 + num2);

// Ejercicio 6
// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// let num1 = parseInt(prompt('Escribe el primer numero'));
// let num2 = parseInt(prompt('Escribe el segundo numero'));
// if (num1 > num2) {
//   console.log(num1)
// } else {
//   console.log(num2)
// }

// Ejercicio 7
// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// let num1 = parseInt(prompt('Escribe el primer numero'));
// let num2 = parseInt(prompt('Escribe el segundo numero'));
// let num3 = parseInt(prompt('Escribe el tercer numero'));
// if (num1 > num2 && num1 > num3) {
//   console.log(num1)
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2)
// } else {
//   console.log(num3)
// }

// Ejercicio 8
// Escribe un programa que pida un número y diga si es divisible por 2.

// let num = parseInt(prompt('Escribe un numero'));
// if (Number.isInteger(num / 2)) {
//   console.log ('Es divisible en dos');
// } else {
//   console.log ('No es divisible en dos')
// }

// Ejercicio 9
// Escribe un programa que pida una frase y escriba las vocales que aparecen.

// let phrase = prompt('Escribe una frase');
// let newphrase = phrase.length;
// for (let index = 0; index < newphrase; index++) {
//   
// }

// Ejercicio 10
// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

// let num = parseInt(prompt('Escribe un numero'));
// if (Number.isInteger(num / 2) || Number.isInteger(num / 3) || Number.isInteger(num / 5) || Number.isInteger(num / 7)) {
//   console.log ('es divisible');
// } else {
//   console.log('no es divisible')
// }

// Ejercicio 11
// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible).

// let num = parseInt(prompt('Escribe un numero'));
// if (Number.isInteger(num / 2) || Number.isInteger(num / 3) || Number.isInteger(num / 5) || Number.isInteger(num / 7)) {
//   if (Number.isInteger(num / 2) == true) {
//     console.log('Es divisible en 2')
//   } 
//   if (Number.isInteger(num / 3) == true) {
//     console.log('Es divisible en 3')
//   }
//   if (Number.isInteger(num / 5) == true) {
//     console.log('Es divisible en 5')
//   }
//   if (Number.isInteger(num / 7) == true) {
//     console.log('Es divisible en 7')
//   } 
// } else {
//   console.log('no es divisible')
// }

// Ejercicio 12
// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let age = parseInt(prompt('Cual es tu edad?'));
// if (age >= 18) {
//   alert('Puedes conducir')
// } else if (age < 18) {
//   alert('No puedes conducir')
// } else {
//   alert('Ingresa un numero')
// }

// Ejercicio 13
// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente 
// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota = parseInt(prompt('Escribe una nota entre 1 y 10'));
// if (nota < 0 || nota > 10) {
//   alert('numero erroneo')
// } else if (nota >= 0 && nota <= 2) {
//   alert('Muy deficiente')
// } else if (nota >= 3 && nota <= 4) {
//   alert ('Insuficiente')
// } else if (nota >= 5 && nota <= 6) {
//   alert('Suficiente')
// } else if (nota === 7) {
//   alert('Bien')
// } else if (nota >= 8 && nota <= 9) {
//   alert('Notable')
// } else if (nota === 10) {
//   alert('Sobresaliente')
// }
// else {
//   alert('Introduce un numero valido')
// }

// Ejercicio 14
// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
