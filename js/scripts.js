function hello(name, age) {
  if (age > 18) {
    console.log('Hola ' + name + ', eres menor de edad');
  } else {
    console.log('Hola ' + name + ', eres mayor');
  }
}

hello('Xavier', 8);
hello('Jorge', 32);

//

function hightest(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}

hightest(40, 9);

//

function numberConsole(a) {
  if (a > 0) {
    console.log(' Es un número positivo');
  } else if (a < 0) {
    console.log(' Es un número negativo');
  } else {
    console.log(' El valor es 0');
  }
}

numberConsole(3);
numberConsole(-3);
numberConsole(0);

//

function calification(numberA, numberB, numberC) {
  const media = (numberA + numberB + numberC) / 3;

  if (media > 0 && media < 5) {
    console.log('Suspenso');
  } else if (media >= 5 && media < 8) {
    console.log(' Aprobada');
  } else {
    console.log('Matricula de honor');
  }
}

calification(8,8,5);

//

function receive(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log('A es mayor');
  } else if (numberB > numberC && numberB > numberA) {
    console.log('B es mayor');
  } else {
    console.log('C es mayor');
  }
}

receive(5, 3, 1);

//

function number(a) {
  if (a % 5 === 0 && a % 3 === 0) {
    console.log('Es divisible por 3 y por 5');
  } else if (a % 5 === 0) {
    console.log('Es divisible por 5');
  } else if (a % 3 === 0) {
    console.log('Es divisible por 3');
  } else {
  }
}

number(30);
number(25);
number(9);

//

function evenOdd(a) {
  if (a % 2 === 0) {
    console.log(' Es un número par');
  } else {
    console.log(' Es un número impar');
  }
}

evenOdd(12);
evenOdd(9);

//

function year(a) {
  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log(' Es un año bisiesto.');
  } else {
    console.log(' No es un año bisiesto');
  }
}

year(1900);
year(2224);

//

function threeDigit(numberOne){
  if (numberOne >= 100 && numberOne <= 999 ){
    console.log('Tiene 3 digitos');
  }else{
    console.log('No tiene 3 digitos');
  }
}

threeDigit(200);

function twoDigit(a,b){
  if (a % b === 0 ){
    console.log('El primero es multiplo del segundo')
  } else{
    console.log('No es multiplo del segundo')
  }
}

twoDigit(20,10)


function doubleNumber(a,b){
  if (a === 2*b){
    return a + ' es el doble ' + b;
  }else if (b === 2*a){
    return b + ' es el doble de ' + a;
  }else {
    return 'Ninguno es el doble del otro';
  }
}

resultDouble = doubleNumber(30,15);
console.log(resultDouble);



/* 
(Son ejemplos, ignorar)
abc
acb
bac
bca
cab
cba
 */

/* 
function getAverage(a,b,c){
    const average = (a+b+c) / 3;
    if (average > 5) {
    console.log( 'Aprobado');
    } else{
    console.log('Suspenso'); 
    }
}
getAverage(1,2,3);
 */

/*  
function example(a, b) {
  console.log(a + b);
}

function printDouble(n) {
  console.log(n * 2);
}

example(1, 2);

function example(a, b) {
  return a + b;
}

const resultA = example(1, 2);
console.log(resultA);
*/
/*  
function example(a, b) {
  return a + b;
}

function printDouble(number) {
  console.log(number * 2);
}

const resultA = example(1, 2);
const resultB = example(6, 3);
printDouble(resultA);
printDouble(resultB);
*/

//
/*  

function sayHello(name) {
  return 'Hola ' + name;
}

const resultSayHello = sayHello('Josefa');
console.log(resultSayHello);

*/