
function hello( name, age) 
{
        
 if (age < 18) 
    {
    console.log ('Hola ' + name + ', eres menor de edad');
    }

 else 
    {
    console.log ('Hola ' + name + ', eres mayor');
    }
  
}
  
hello('xavier',8)
hello('xavier',32)



function number(a,b)
{
  if (a !== b)
    {
    if (a > b)
        {
        console.log(a)   
        }
    else    // a < b ("a" es menor que "b")
        {
        console.log (b)
        }
   
    }  

}

number(33,30)



function numberConsole(a)
{
    if (a < 0)
    {
        console.log ( ' es un número negativo');
    }

    else if (a > 0)
    {
        console.log ( ' es un número positivo');
        
    }
    else
    {
        console.log (' es cero')
    }

}

numberConsole(-5)
numberConsole(5)
numberConsole(0)

// 

function note(a,b,c)
{
    if (a < b)
    {
        console.log(' Suspenso')
    }

    else if (b > c) 
    {
        console.log (' Aprobado')
    }

    else if (c >= 8)
    {
        console.log (' Matricula de honor')
    }

}

note(2,5,9)
note(8,8,7)
note(6,3,9)
