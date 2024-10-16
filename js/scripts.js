
function hello( name, age) {
        
 if( age < 10) {
    console.log ('Hola ' + name + ', eres menor de edad');
  
    } else if (age > 25){
    console.log ('Hola ' + name + ', eres mayor');
  }
  
  }
  
hello('xavier',8)
hello('xavier',32)


function number(one,two){
    if(one > two){
        console.log (one + ' es menor que ' + two)
    } 
    else (two > one); {
        console.log (two + ' es mayor que ' + one)

    }

}

number(27,30)


function numberConsole(a, b, c){
    
    if (a < b || b < a){
        console.log(  'es un número negativo')
    }else if (a > b > c){
        console.log ('es un número positivo')
    }
    else{
        console.log('es cero')
    }
}

numberConsole(5,5)
numberConsole(5,1,5)
