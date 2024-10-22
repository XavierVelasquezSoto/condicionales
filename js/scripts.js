//1 - Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos.
/* function hello(name, age) {
  if (age > 18) {
    console.log('Hola ' + name + ', eres menor de edad');
  } else {
    console.log('Hola ' + name + ', eres mayor');
  }
}

hello('Xavier', 8);
hello('Jorge', 32); */

const hello = (name, age) =>{
  if(age >= 18){
    console.log(`Hola ${name} eres mayor de edad`);
  }else if(age < 18){
    console.log(`Hola ${name} eres menor de edad`);
  }
}
hello("Xavier", 25);
hello("Xavier", 15);


//2 - Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.

/* function hightest(numberA, numberB) {
  if (numberA > numberB) {
    console.log(numberA);
  } else {
    console.log(numberB);
  }
}

hightest(40, 9); */

const twoNumber = (number1, number2) => {
  if(number1 > number2){
    return number1 + " es el mayor"
  }else if(number2 > number1){
    return number2 + " es el mayor"
  }
    
}
resultTwoNumber = twoNumber(20,35);
console.log(resultTwoNumber)


//3 - Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.

/* function numberConsole(a) {
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
numberConsole(0); */

const negativeNumber = (number) => {
  if(number > 0){
    return number + " es positivo";
  }else if (number < 0){
    return number + " es negativo";
  }
    return "es " + number
}

const resultNegative1 = negativeNumber (10)
console.log(resultNegative1)
const resultNegative2 = negativeNumber (-5)
console.log(resultNegative2)
const resultNegative3 = negativeNumber (0)
console.log(resultNegative3)


//4 - Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"


/* function calification(numberA, numberB, numberC) {
  const media = (numberA + numberB + numberC) / 3;

  if (media > 0 && media < 5) {
    console.log('Suspenso');
  } else if (media >= 5 && media < 8) {
    console.log(' Aprobada');
  } else {
    console.log('Matricula de honor');
  }
}

calification(8,8,5); */

const calification = (numA, numB, numC) => {
  const average = (numA + numB + numC) / 3
  
  if(average < 5 && average > 0){
    return "Suspenso" 
  }else if(average < 8 && average >=5 ){
    return "Aprobado"
  } 
    return "Matrícula de honor"
}

const resultCalification = calification(8,8,6);
console.log(resultCalification);

//5 - Crea una función que reciba tres números y devuelva el mayor de ellos.


/* function receive(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    console.log('A es mayor');
  } else if (numberB > numberC && numberB > numberA) {
    console.log('B es mayor');
  } else {
    console.log('C es mayor');
  }
}

receive(5, 3, 1); */

const  threeNumber = (num1, num2, num3) => {
  if(num1 > num2 && num1 > num3){
    return `${num1} es mayor`
  }else if(num2 > num1 && num2 > num3){
    return `${num2} es mayor`
  }
    return `${num3} es mayor`
}

const resultThreeNumber = threeNumber(25,8,20)
console.log(resultThreeNumber)

//6 - Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número.

/* function number(a) {
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
number(9); */

//7 - Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.

/* function evenOdd(a) {
  if (a % 2 === 0) {
    console.log(' Es un número par');
  } else {
    console.log(' Es un número impar');
  }
}

evenOdd(12);
evenOdd(9); */

//8 - Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado

/* function year(a) {
  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log(' Es un año bisiesto.');
  } else {
    console.log(' No es un año bisiesto');
  }
}

year(1900);
year(2224); */




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